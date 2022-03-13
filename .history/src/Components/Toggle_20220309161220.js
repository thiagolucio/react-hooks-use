import React, { useCallback, useState } from 'react';
import MdMenuOpen from 'react-ionicons/lib/MdMenuOpen';

function Toggle() {
    const [isToggleChanged, setIsToggleChanged] = useToggle();
    
    return (
        <button className="button-toggle" onClick={setIsToggleChanged}>{isToggleChanged ? <MdMenuOpen/> : 'Click to Toggle'}</button>
    );
}
const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}

export default Toggle;