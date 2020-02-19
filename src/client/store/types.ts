



export interface TodoItemType {
    id: number;
    title: string;
    discription: string;
    completed?: boolean;
}


 

export interface ActionTypeMake {
    type: string;
    payload: TodoItemType;
}

export interface ActionTypeUseId {
    type: string;
    id: number;
}


export type FormData = {
    todoTitle: string;
    todoDiscription: string;
};


export interface InitialStateType {
    todoArr: any[] | TodoItemType[]
}

export interface ActionType extends ActionTypeUseId, ActionTypeMake { };