import React, {useEffect, useState} from 'react';
import {getProducts} from "../../services/api.service";
import {IProduct} from "../../models/IProduct";
import Product from "../product/Product";

const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getProducts().then(value => setProducts(value));
    }, []);
    return (
        <div>
            {
                products.map((product: IProduct) => (<Product item={product} key={product.id}/>))
            }

        </div>
    );
};

export default Products;
