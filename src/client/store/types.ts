
export interface ActionTypePayload {
    title: string,
    discription: string
}

export interface ActionType {
    type: string;
    payload: ActionTypePayload

}

export interface TodoItem {
    id: number;
    title: string;
    discription: string;
    done: boolean;
}


export interface InitialStateType {
    todoArr: any[] | [TodoItem]
}
