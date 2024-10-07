import React, {FC} from 'react';
import './Character.css'

type IPropType = {
    name: string;
    type: string;
    gender: string;
    status: string;
    img: string;

    children?: React.ReactNode;
}
const Character: FC<IPropType> = (props) => {
    let {children, status, type, gender, name, img} = props;
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <ul>
                <li>status: {status}</li>
                <li>type: {type}</li>
                <li>gender: {gender}</li>
            </ul>
            <img src={img} alt={name}/>
            {
                children
            }


        </div>
    );
};

export default Character;
