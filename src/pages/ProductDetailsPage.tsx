import React from 'react';
import {useLocation} from "react-router-dom";
import {IProduct} from "../models/IProduct";

const ProductDetailsPage = () => {

    let {state: {data}} = useLocation();
    const product: IProduct = data;


    return (
        <div>
            {
                JSON.stringify(product)

            }
        </div>
    );
};

export default ProductDetailsPage;
