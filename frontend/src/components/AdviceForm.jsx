import React, { useState } from "react";

const AdviceForm = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Question submitted: ${question}`);
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question here..."
        className="w-full p-2 border rounded mb-4"
        rows="4"
        required
      ></textarea>
      <button type="submit" className="bg-lavenderDark text-white p-2 rounded w-full">
        Submit Question
      </button>
    </form>
  );
};

export default AdviceForm;