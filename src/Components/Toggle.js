import React, { useCallback, useState } from "react";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import "./Toggle.css";
import UseEffectAnotherExample from "./UseEffectAnotherExample";

function Toggle() {
  const [isToggleChanged, setIsToggleChanged] = useToggle();

  return (
    <>
      <div
        className={
          isToggleChanged
            ? "container_column_center sidebar_iconic"
            : "container_column_center sidebar"
        }
      >
        <button className="button-toggle" onClick={setIsToggleChanged}>
          {isToggleChanged ? <RiMenuUnfoldFill /> : <RiMenuFoldFill />}
        </button>
        <UseEffectAnotherExample />
      </div>
    </>
  );
}
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  console.log("status > ", state);
  return [state, toggle];
};

export default Toggle;
