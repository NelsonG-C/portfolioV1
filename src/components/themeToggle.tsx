import React, { useState } from "react";
import "../styles/style.css";

const ThemeToggle = () => {
  const [checked, setChecked] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const body = document.body.classList;
    if (checked) {
      body.add("lighttheme");
      setChecked("move");
    } else {
      body.remove("lighttheme");
      setChecked("");
    }
  };

  return (
    <div className="switch-pos">
    <div className={`switch ${checked !== "" ? "move" : ""}`}>
      <input type="checkbox" onChange={e => handleChange(e)} />
      <span className="circle large"></span>
      <span className="circle small"></span>
    </div>
    </div>
  );
};

export default ThemeToggle;
