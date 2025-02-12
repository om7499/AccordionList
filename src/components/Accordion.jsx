import React, { useState, useEffect } from "react";
import "../App.css";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [openId, setOpenId] = useState(null);

  // Fetch data from db.json
  useEffect(() => {
    fetch("http://localhost:5000/user") 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // handel answer using this function
  const handleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion-container">
      {data.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-question" onClick={() => handleAnswer(item.id)}>
            {item.question}
            <span className={`arrow ${openId === item.id ? "rotate" : ""}`}>&#9662;</span>
          </div>
          <div className={`accordion-answer ${openId === item.id ? "show" : ""}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
