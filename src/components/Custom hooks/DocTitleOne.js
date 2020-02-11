import React, {useState, useEffect} from 'react';

function DocTitleOne() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Count -{Count}</button>
        </div>
    );
}

export default DocTitleOne;