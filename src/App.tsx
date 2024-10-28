import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Menu from "./Menu";


function App() {
    let [number, setNumber] = useState<number>(0);

    useEffect(() => {
        console.log('App build');
    });

    const someFunction = useCallback((): void => {
        console.log('asd');
    }, []);
    return (
        <div>

            <Menu id={0} someFn={someFunction}/>

            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(++number);
            }}>increment
            </button>

        </div>

    );
}

export default App;
