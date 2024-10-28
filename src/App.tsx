import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './App.css';
import Menu from "./Menu";


function App() {
    let [number, setNumber] = useState<number>(0);

    const [link1, setLink1] = useState<string>('link1');
    const [link2, setLink2] = useState<string>('link2');

    useEffect(() => {
        console.log('App build');
    });

    const someFunction = useCallback((): void => {
        console.log('asd');
    }, []);
    const combinedLinks = useMemo(() => {
        return [link1, link2];
    }, [link1, link2])
    return (
        <div>

            <Menu id={0} someFn={someFunction} links={combinedLinks}/>

            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(++number);
            }}>increment
            </button>

        </div>

    );
}

export default App;
