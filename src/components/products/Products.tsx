import React, {FC} from 'react';

import {IProductModel} from "../models/IProductModel";
import Product from "../product/Product";
import {apiProductsObject} from "../../data";

const Products: FC<any> = () => {
    const products: IProductModel[] = apiProductsObject.products;
    return (
        <div>
            {
                products.map((product: IProductModel) => (<Product item={product}/>))

            }
        </div>
    );
};

export default Products;
