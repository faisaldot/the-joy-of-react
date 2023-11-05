import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

export default function App() {
  return (
    <>
      <h1>Exercise of the useState hook module.</h1>
      <hr />
      <Character />
      <br />
      <hr />
      <Counter />
    </>
  );
}

// Character Exercise
function Character() {
  const [strength, setStrength] = React.useState(6);
  const [dexterity, setDexterity] = React.useState(9);
  const [intelligence, setIntelligence] = React.useState(15);

  function triggerLevelUp() {
    const nextStrength = strength + 1;
    const nextDexterity = dexterity + 2;
    const nextIntelligence = intelligence + 1;

    setStrength(nextStrength);
    setDexterity(nextDexterity);
    setIntelligence(nextIntelligence);

    window.alert(`
    Congratulations! Your hero now has the following stats:
    Str: ${nextStrength}
    Dex: ${nextDexterity}
    Int: ${nextIntelligence}
    `);
  }

  return (
    <div className="wrapper">
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      <button onClick={triggerLevelUp}>Level Up</button>
    </div>
  );
}

// Counter Exercise
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className="wrapper">
        <p>Current value:</p>
        <h1>{count}</h1>
        <div>
          {/* increase the count by 1 */}
          <button onClick={() => setCount((prev) => prev + 1)}>
            <ChevronUp />
          </button>
          {/* increase the count by 10 */}
          <button onClick={() => setCount((prev) => prev + 10)}>
            <ChevronsUp />
          </button>
          {/*  button should reset the count to 0 */}
          <button onClick={() => setCount(0)}>
            <RotateCcw />
          </button>
          {/* button should set the count to a random number between 1 and 100 */}
          <button onClick={() => setCount(Math.floor(Math.random() * 100))}>
            <Hash />
          </button>
          {/* button should decrease the count by 10 */}
          <button onClick={() => setCount((prev) => prev - 10)}>
            <ChevronsDown />
          </button>
          {/* button should decrease the count by 1 */}
          <button onClick={() => setCount((prev) => prev - 1)}>
            <ChevronDown />
          </button>
        </div>
      </div>
    </>
  );
}
