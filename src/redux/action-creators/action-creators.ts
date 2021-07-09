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

export const LoadBlog = (Blogs: any) => {
    return {
        type: Types.LOAD_BLOG,
        payload: Blogs
    }
}
export const LoadBlogAsync = () => {
    return {
        type: Types.LOAD_BLOG_ASUNC,

    }
}


export const Loading = (isLoading: boolean) => {
    return {
        type: Types.LOADING,
        payload: isLoading
    }
}