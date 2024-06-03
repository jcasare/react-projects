import React, { useState } from "react";
import data from "./data";
import "./styles.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);
  const handleSelected = (id) => {
    console.log(id);
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelected = (id) => {
    let newSelected = [...multipleSelected];
    const index = newSelected.indexOf(id);
    if (index === -1) newSelected.push(id);
    else newSelected.splice(index, 1);
    setMultipleSelected(newSelected);
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi-Select
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="accordian-item" key={item.id}>
              <div
                className="accordian-title"
                onClick={
                  enableMultiSelect
                    ? () => handleMultipleSelected(item.id)
                    : () => handleSelected(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ||
              multipleSelected.indexOf(item.id) !== -1 ? (
                <div className="accordian-content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
