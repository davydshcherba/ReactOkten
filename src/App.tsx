import './App.css'
import {products} from "./data/products-array.ts";
import MyComponent from "./components/MyComponent/MyComponent.tsx";


function App() {

    return (
        <>
            {
                products.map((product, index) => (
                    <MyComponent key={index} product={product}/>
                ))
            }
        </>
    )
}

export default App