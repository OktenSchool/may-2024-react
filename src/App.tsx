import React, {useReducer} from 'react';
import './App.css';

type Action = { type: string, payload: number };

const reducerActions = (state: number, action: Action) => {
    switch (action.type) {
        case 'add':
            state = state + action.payload;
            return state;
        case 'getBack':
            state = state - action.payload;
            return state;

        default:
            return state;
    }

}


function App() {

    const [asdasd, dispatch] = useReducer(reducerActions, 0);

    return (
        <div>

            <h2>{asdasd}</h2>
            <button onClick={() => {
                dispatch({type: 'add', payload: 1});
            }}>increment
            </button>


            <button onClick={() => {
                dispatch({type: 'getBack', payload: 100});
            }}>dectrement
            </button>


        </div>

    );
}

export default App;
