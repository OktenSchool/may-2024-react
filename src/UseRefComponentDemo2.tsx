import React, {useEffect, useRef, useState} from 'react';

const UseRefComponentDemo2 = () => {

    let [number, setNumber] = useState<number>(0);
    let anotherNumber = useRef<number>(0);

    useEffect(() => {
        console.log(anotherNumber.current);
    }, [number]);


    return (
        <div>
            <h2>{number} </h2>
            <h3>{}</h3>


            <button onClick={() => {
                setNumber(++number);

            }}>left
            </button>


            <button onClick={() => {
                setNumber(--number);
                console.log(anotherNumber.current++);
                console.log(anotherNumber);

            }}>right
            </button>

        </div>
    );
};

export default UseRefComponentDemo2;
