import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getProduct} from "../services/api.service";
import {IProduct} from "../models/IProduct";

const ProductDetailsPage = () => {

    let {id} = useParams();

    const [product, setProduct] = useState<IProduct | null>(null);
    useEffect(() => {
        if (id) {
            getProduct(id).then(value => setProduct(value));
        }
    }, []);
    return (
        <div>
            {
                JSON.stringify(product)

            }
        </div>
    );
};

export default ProductDetailsPage;
