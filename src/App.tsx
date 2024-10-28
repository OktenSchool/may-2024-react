import React from 'react';
import './App.css';
import TonyStark from "./TonyStark";
import ColonelMamba from "./ColonelMamba";
import IronSuit from "./IronSuit";


function App() {
    return (
        <div>
            <IronSuit><TonyStark/></IronSuit>
            <IronSuit><ColonelMamba/></IronSuit>

        </div>

    );
}

export default App;
