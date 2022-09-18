import React, {useState, useEffect} from 'react';

function ExampleUseeffect() {
    const [count, setCount] = useState(0);

    //Similar to componentDidMount and componentDidUpdate;
    useEffect(()=> {
        document.title = 'You clicked ${count} times';
        console.log(count)
    });
    return (
        <div>
        <p> You clicked {count} times </p>
        <button onClick={() => setCount(count+1)}>
        Click me
        </button>
        </div>

    );
}
export default ExampleUseeffect;