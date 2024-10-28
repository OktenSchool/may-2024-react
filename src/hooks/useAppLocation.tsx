import {Location, useLocation} from "react-router-dom";

const useAppLocation = <T,>(): Location<T> => {
    return useLocation();
}


