import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct";
import {Link} from "react-router-dom";

type ProductProps = {
    item: IProduct;
}
const Product: FC<ProductProps> = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()}>{item.title}</Link>
        </div>
    );
};

export default Product;
