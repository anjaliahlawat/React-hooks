import React, { useState, useEffect } from 'react';

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        //give empty second parameter to have no dependency on anything and hence
        // render only once (initial render only)
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        
        //to cleanup (similar to componentWillUnmount fn)
        return() => {
            console.log('Component unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default HookMouse;