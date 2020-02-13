
 export interface ActionType {
    type: string;
    payload: string;
}

export interface TodoItem {
    id: number;
    item: string;
    done: boolean;
}


export interface InitialStateType {
    todoArr: any[] | [TodoItem]
}
 