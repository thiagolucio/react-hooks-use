import { useCallback, useState } from 'react';

function Toggle() {
    const [isStateChanged, setIsStateChanged] = useToggle();
    
    return (
        <button 
            className="button-toggle" 
            onClick={setIsStateChanged}>{isStateChanged ? 'Toggled' : 'Click to Toggle'}
        </button>
    );
}
const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}

export default Toggle;