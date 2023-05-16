export namespace UsersManagementActions {
  export class FetchAll {
    static readonly type = '[User Management] Fetch All';
  }

  export class Delete {
    static readonly type = '[User Management] Delete';

    constructor(public id: number) {}
  }
}
