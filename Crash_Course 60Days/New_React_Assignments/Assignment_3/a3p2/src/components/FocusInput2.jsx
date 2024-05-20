// src/components/FocusInput2.jsx

import { useRef, useEffect } from "react";

function FocusInput2() {
  const inputRef = useRef(null);

  // useEffect(() => {
  //   // complete the missing code
    

  // }, []);
  const handleFocus=()=>{
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me on component mount"
      />
      <button onClick={handleFocus}>Focus Input 2</button>
    </div>
  );
}

export default FocusInput2;
