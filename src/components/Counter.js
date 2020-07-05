import React, { useContext, useEffect } from 'react';
import { StateContext, DispatchContext } from '../store/store';
import { COUNTER_DECREASEMENT, COUNTER_INCREASEMENT } from '../store/actions';

export default function Counter(props) {

    const {counterState} = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    useEffect(() => {
        console.log(counterState);
    }, [counterState])
    
    function handleDecreasement() {
        dispatch(COUNTER_DECREASEMENT(8))
    }

    function handleIncreasement() {
        dispatch(COUNTER_INCREASEMENT(8))
    }

    function handleChange(e) {
        e.preventDefault();
    }

    return (
        <div>
            <button onClick={handleDecreasement}>-</button>
            <input 
                style={{ textAlign: "center", marginLeft: '10px', marginRight: '10px' }} 
                value={counterState.count} 
                onChange={handleChange}/>
            <button onClick={handleIncreasement}>+</button>
        </div>
    )
}