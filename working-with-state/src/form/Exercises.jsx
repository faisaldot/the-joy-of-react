import { useState } from "react";
import { COUNTRIES } from "./data";
export default function Exercises() {
  return (
    <>
      {/* <CountryPicker /> */}
      <TowFactor />
    </>
  );
}

// Country Picker

function CountryPicker() {
  const countryNames = Object.entries(COUNTRIES);

  const [country, setCountry] = useState("d");
  return (
    <>
      <form>
        <fieldset>
          <legend>Shipping Info</legend>
          <label htmlFor="country">Country: </label>
          <select
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            id="country"
          >
            <option value="">—Select Country—</option>
            <optgroup label="Countries">
              {countryNames.map(([id, label]) => (
                <option value={id} key={id}>
                  {label}
                </option>
              ))}
            </optgroup>
          </select>
        </fieldset>
      </form>
      <p>Selected country: {COUNTRIES[country]} </p>
      <button>Submit</button>
    </>
  );
}

// Tow factor
const CORRECT_CODE = "123456";
function TowFactor() {
  const [code, setCode] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isCorrect = code === CORRECT_CODE;
    window.alert(isCorrect ? "Correct" : "incorrect");
    setCode("");
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="auth-code">Enter authorization code: </label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          id="auth-code"
          type="text"
          maxLength={6}
        />{" "}
        <button>Validate</button>
      </form>
    </>
  );
}
