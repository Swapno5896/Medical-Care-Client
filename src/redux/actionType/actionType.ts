import { Types } from "../types/types";

interface Deposit {
    type: Types.INCREMENT,
    payload: number
}

interface Withdraw {
    type: Types.DECREMENT,
    payload: number
}

export type Action = Deposit | Withdraw