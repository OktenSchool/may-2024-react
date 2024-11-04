import {IUser} from "../models/IUser";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type UserSliceType = {
    users: IUser[]
    user: IUser | null
}

const userInitState: UserSliceType = {
    users: [],
    user: null
}
// todo
export let userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        loadUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        removeUser: (state, action: PayloadAction<number>) => {
            let id = action.payload;
            let users = state.users.splice(id - 1, 1);
            state.users = users;
        }
    }
});
export let {loadUser, loadUsers, removeUser} = userSlice.actions;

export const store = configureStore({
    reducer: {
        userSliceHimself: userSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();




