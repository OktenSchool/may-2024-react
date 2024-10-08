import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";

type TypeProps = { item: IProductModel }

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default Product;
