import React, {useEffect, useState} from 'react';
import './App.css';
import Menu from "./Menu";


function App() {
    let [number, setNumber] = useState<number>(0);
    useEffect(() => {
        console.log('App build');
    })

    return (
        <div>

            <Menu id={number}/>

            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(++number);
            }}>increment
            </button>

        </div>

    );
}

export default App;
