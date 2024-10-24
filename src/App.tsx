import React from 'react';
import './App.css';
import obj3, {obj1, obj2} from "./asd";


export function App() {
    return (
        <div>
            {
                JSON.stringify(obj1)
            }
            {
                JSON.stringify(obj2)
            }

            {JSON.stringify(obj3)}

        </div>

    );
}

export default App;
