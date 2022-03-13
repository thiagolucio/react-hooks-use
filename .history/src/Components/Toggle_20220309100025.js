import React, { useCallback, useState } from 'react';

function Toggle() {
    const [isToggleChanged, setIsToggleChanged] = useToggle();
    
    return (
        <button className="button-toggle" onClick={setIsToggleChanged}>{isToggleChanged ? 'Toggled' : 'Click to Toggle'}</button>
    );
}
const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}

export default Toggle;