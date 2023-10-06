import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';

export namespace TodoActions {
  export class Add {
    static readonly type = '[Todo] Add';

    constructor(public payload: string) {}
  }

  export class Update {
    static readonly type = '[Todo] Update';

    constructor(public payload: TodoItemType) {}
  }

  export class FetchAll {
    static readonly type = '[Todo] Fetch All';
  }

  export class Delete {
    static readonly type = '[Todo] Delete';

    constructor(public id: number) {}
  }
}
