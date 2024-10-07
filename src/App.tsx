import React from 'react';
import './App.css';
import Character from "./componets/character/Character";
import Users from "./componets/users/Users";


function App() {
    return (
        <div>
            <Character
                name={'Self-Congratulatory Jerry'}
                type={'Mytholog'}
                gender={'Male'}
                status={'unknown'}
                img={'https://rickandmortyapi.com/api/character/avatar/310.jpeg'}
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, unde.</p>

            </Character>

            <Character
                name={'Fido'}
                type={'Dog'}
                gender={'Male'}
                status={'Alive'}
                img={'https://rickandmortyapi.com/api/character/avatar/397.jpeg'}>


                <div>Lorem ipsum.</div>

            </Character>
            <hr/>

            <Users/>


        </div>

    );
}

export default App;
