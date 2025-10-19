import {useState} from "react";

const App = () => {

    let [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => {
                console.log("+")
                setCounter(++counter);
            }}>Increment
            </button>
            <button onClick={() => {
                console.log("-")
                setCounter(--counter);
            }}>Decrement
            </button>
        </div>
    );
};

export default App;