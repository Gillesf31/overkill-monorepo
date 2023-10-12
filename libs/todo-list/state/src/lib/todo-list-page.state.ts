import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';
import { Observable, tap, throwError } from 'rxjs';
import { TodoActions } from './todo-list-page.action';
import { TodoListPageDataAccessService } from '@overkill-monorepo/todo-list/todo-list-page/data-access';

export type TodoListStateType = {
  todoItems: TodoItemType[];
};

@State<TodoListStateType>({
  name: 'todoList',
  defaults: {
    todoItems: [],
  },
})
@Injectable()
export class TodoListState {
  readonly #todoListService: TodoListPageDataAccessService = inject(TodoListPageDataAccessService);

  @Selector()
  public static todoItems(state: TodoListStateType): TodoItemType[] {
    return state.todoItems;
  }

  @Action(TodoActions.FetchAll)
  public fetchAll(ctx: StateContext<TodoListStateType>): Observable<TodoItemType[]> {
    return this.#todoListService.getTodos().pipe(
      tap((todoItems: TodoItemType[]) => {
        const state: TodoListStateType = ctx.getState();
        ctx.setState({
          ...state,
          todoItems,
        });
      })
    );
  }

  @Action(TodoActions.Delete)
  public delete(ctx: StateContext<TodoListStateType>, action: TodoActions.Delete): Observable<void> {
    const state: TodoListStateType = ctx.getState();

    const foundItem: TodoItemType | undefined = state.todoItems.find((item: TodoItemType) => item.id === action.id);

    if (!foundItem) {
      return throwError(() => 'Item not found');
    }

    return this.#todoListService.deleteTodoItem(foundItem.id).pipe(
      tap(() => {
        const index: number = state.todoItems.indexOf(foundItem);
        const newTodoItems: TodoItemType[] = state.todoItems.slice(0, index).concat(state.todoItems.slice(index + 1));

        ctx.patchState({
          ...state,
          todoItems: newTodoItems,
        });
      })
    );
  }

  @Action(TodoActions.Add)
  public add(ctx: StateContext<TodoListStateType>, action: TodoActions.Add): Observable<TodoItemType> {
    const state: TodoListStateType = ctx.getState();

    const newTodoItem: TodoItemType = {
      id: state.todoItems.length ? state.todoItems[state.todoItems.length - 1].id + 1 : 0,
      title: action.payload,
      completed: false,
    };

    return this.#todoListService.addTodoItem(newTodoItem).pipe(
      tap((todoItem: TodoItemType) => {
        ctx.patchState({
          ...state,
          todoItems: [...state.todoItems, todoItem],
        });
      })
    );
  }

  @Action(TodoActions.Update)
  public update(ctx: StateContext<TodoListStateType>, action: TodoActions.Update): Observable<TodoItemType> {
    const state: TodoListStateType = ctx.getState();

    const foundItem: TodoItemType | undefined = state.todoItems.find((item: TodoItemType) => item.id === action.payload.id);

    if (!foundItem) {
      return throwError(() => 'Item not found');
    }

    return this.#todoListService.updateTodoItem(action.payload).pipe(
      tap((todoItem: TodoItemType) => {
        const index: number = state.todoItems.indexOf(foundItem);
        const newTodoItems: TodoItemType[] = state.todoItems
          .slice(0, index)
          .concat(todoItem)
          .concat(state.todoItems.slice(index + 1));

        ctx.patchState({
          ...state,
          todoItems: newTodoItems,
        });
      })
    );
  }
}
