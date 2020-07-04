import React, { useContext } from 'react';
import { store } from '../store/store';
import { COUNTER_DECREASEMENT, COUNTER_INCREASEMENT } from '../store/actions';

export default function Counter(props) {

    const [rootState, dispatch] = useContext(store);
    
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
                value={rootState.count} 
                onChange={handleChange}/>
            <button onClick={handleIncreasement}>+</button>
        </div>
    )
}