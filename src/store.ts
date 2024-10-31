import {create} from "zustand";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";
import {IComment} from "./models/IComment";

type StoreType = {
    userSlice: {
        allUsers: IUser[],
        loadUsers: (users: IUser[]) => void
    },
    postSlice: {
        allPosts: IPost[],
        loadPosts: (posts: IPost[]) => void
    },
    commentSlice: {
        allComments: IComment[],
        loadComments: (comments: IComment[]) => void
    }
}
export const useStore = create<StoreType>()((set) => {
    return {
        userSlice: {
            allUsers: [],
            loadUsers: (users) => {
                return set(state => ({
                    ...state,
                    userSlice: {
                        ...state.userSlice,
                        allUsers: users,
                    }
                }))
            }
        },
        postSlice: {
            allPosts: [],
            loadPosts: (posts) => {
                return set(state => {
                    return {
                        ...state,
                        postSlice: {
                            ...state.postSlice,
                            allPosts: posts,
                        }
                    }
                })
            }
        },
        commentSlice: {
            allComments: [],
            loadComments: (comments) => {
                return set(state => {
                    return {
                        ...state,
                        commentSlice: {
                            ...state.commentSlice,
                            allComments: comments,
                        }
                    }
                })
            }
        }
    }

});

