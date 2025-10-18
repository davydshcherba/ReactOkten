import type {FC} from "react";
import type {IProduct} from "../../models/products.ts";

type MyComponentPropsType = {
    product: IProduct;
}

const MyComponent:FC<MyComponentPropsType> = ({product}) => {  // Added index to destructuring
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt="image"/>
        </div>
    );
};

export default MyComponent;