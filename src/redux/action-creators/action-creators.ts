import { Types } from "../types/types"

export const Deposit = (amount: number) => {
    return {
        type: Types.INCREMENT,
        payload: amount
    }
}

export const Withdraw = (amount: number) => {
    return {
        type: Types.DECREMENT,
        payload: amount
    }
}