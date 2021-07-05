import { Types } from "../types/types";

interface Deposit {
    type: Types.INCREMENT,
    payload: number
}

interface Withdraw {
    type: Types.DECREMENT,
    payload: number
}
interface LoadBlog {
    type: Types.LOAD_BLOG,
    payload: any
}
interface Loading {
    type: Types.LOADING,
    payload: boolean
}

export type Action = Deposit | Withdraw | LoadBlog | Loading