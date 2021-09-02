import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="FAQ__itemContainer">
      <div
        className={
          isExpanded
            ? "FAQ__questionContainer FAQ__questionContainer--expanded"
            : "FAQ__questionContainer"
        }
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="FAQ__item__circle">{isExpanded ? "-" : "+"}</div>
        <p className="FAQ__item__question">{question}</p>
      </div>
      {isExpanded && (
        <div className="FAQ__itemAnswerContainer">
          <p className="FAQ__item__answer">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
