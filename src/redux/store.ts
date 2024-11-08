import {configureStore, createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../models/IUser";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;

}

const userInitState: UserSliceType = {
    users: [],
    user: null
}

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let usersFromAPI = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(usersFromAPI);
    } catch (e) {
        let e2 = e as AxiosError;
        return thunkAPI.rejectWithValue(e2);
    }
});

const loadUser = createAsyncThunk('userSlice/loadUser', async (id: number, thunkAPI) => {
    try {
        let user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(user);
    } catch (e) {
        let e1 = e as AxiosError;
        return thunkAPI.rejectWithValue(e1);
    }


});

let userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        xxx: (state, action: PayloadAction) => {
            //......??? some sync operatation
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<AxiosError | unknown>) => {
                console.log(action.payload);
                // sendErrorLog()

            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;

            })
            .addCase(loadUser.rejected, (state, action) => {
                //.....
                // sendErrorLog()

            })
            .addMatcher(isRejected(loadUsers, loadUser), (state, action) => {
                // sendLogAboutCommonError()

            })
            .addMatcher(isFulfilled(loadUser, loadUsers), (state, action) => {

            })


});

export const userSliceActions = {...userSlice.actions, loadUsers, loadUser}


export let store = configureStore({
    reducer: {
        userPart: userSlice.reducer
    }
});

export let useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export let useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();






