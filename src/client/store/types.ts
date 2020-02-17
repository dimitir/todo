
export interface ActionTypeMakePayload {
    title: string;
    discription: string;
}

export interface ActionTypeMake {
    type: string;
    payload: ActionTypeMakePayload;

}


export interface ActionTypeCompleted {
    type: string;
    id: number;
}

export interface TodoItemType {
    id: number;
    title: string;
    discription: string;
    completed: boolean;
}

export interface InitialStateType {
    todoArr: any[] | TodoItemType[]
}


export interface ActionType extends ActionTypeCompleted, ActionTypeMake{};