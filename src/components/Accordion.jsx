import React, { useState, useEffect } from "react";
import "../App.css";

const Accordion = () => {
  const [userdata, setUserData] = useState([]);
  const [openId, setOpenId] = useState(null);

  // Fetch data from public folder
  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((data) => setUserData(data.user || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle answer toggle
  const handleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion-container">
      {userdata.map((item) => (
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
