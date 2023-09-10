import text from "./data";
import { useState } from "react";
const App = () => {
  const [index, setIndex] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    if (+e.target.value <= -1) {
      return;
    }
    setIndex(e.target.value);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <label htmlFor="name" className="label">
          Photoprah:
          <input
            type="number"
            name="name"
            className="input"
            onChange={(e) => handleOnChange(e)}
            value={index}
          />
        </label>
        <input type="submit" value="Submit" className="btn" />
      </form>
      <div className="content">
        {index != 0 &&
          text.slice(0, index).map((item, index) => {
            return (
              <div className="section-center lorem-text" key={index}>
                <p >
                  {item}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default App;
