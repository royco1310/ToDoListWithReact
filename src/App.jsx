import React, { useState } from "react";
import ColorfulMessage from "./component/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>HALLO!</h1>
      <ColorfulMessage color="blue"> HOW ARE YOU?</ColorfulMessage>
      <ColorfulMessage color="pink"> I AM FINE!</ColorfulMessage>
      <button onClick={onClickCountUp}>COUNT UP</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>('◇')ゞ</p>}
    </>
  );
};
export default App;
