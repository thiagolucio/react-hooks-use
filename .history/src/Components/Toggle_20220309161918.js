import React, { useCallback, useState } from 'react';
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";

function Toggle() {
    const [isToggleChanged, setIsToggleChanged] = useToggle();
    
    return (
        <button className={isToggleChanged ? 'button-toggle' : 'open-toggle'} onClick={setIsToggleChanged}>{isToggleChanged ? <RiMenuUnfoldFill/> : <RiMenuFoldFill/>}</button>
    );
}
const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}

export default Toggle;