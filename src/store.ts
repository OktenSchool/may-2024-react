import {create} from "zustand";
import {IUser} from "./models/IUser";

type StoreType = {
    userSlice: {
        allUsers: IUser[],
        loadUsers: (users: IUser[]) => void
    },
    postSlice: {
        allPosts: any[],
        loadPosts: (posts: any) => void
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
        }
    }

});

