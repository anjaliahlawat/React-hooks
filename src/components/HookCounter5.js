import React, {useState, useEffect} from 'react';

function HookCounter5() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    useEffect(() => {
        //provide second parameter to useEffect to conditionally update state
        console.log('useEffect - Updating document title')
        document.title = `Clicked ${count} times`
    }, [count])
    
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}

export default HookCounter5;