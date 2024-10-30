import {createContext} from "react";
import {IUser} from "./models/IUser";


type StoreType = {
    userSlice: {
        allUsers: IUser[],
        user: IUser | null,

    }

}

export let defaultStoreValue: StoreType = {
    userSlice: {
        allUsers: [],
        user: null,
    }
};
export let MyContext = createContext<StoreType>(defaultStoreValue);
