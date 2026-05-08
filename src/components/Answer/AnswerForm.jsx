import './AnswerForm.css';
import { useState } from 'react';

const AnswerForm = () => {
  const [answer, setAnswer] = useState('');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (!answer.trim()) {
      alert('Answer cannot be empty. Please write your answer before submitting.');
      return;
    }
    alert('Answer submitted successfully!');
    setAnswer('');
  };

  return (
    <div className="answer-form-card">
      <h2>Your Answer</h2>
      <textarea
        rows={8}
        placeholder="Write your answer here..."
        className="answer-textarea"
        value={answer}
        onChange={handleChange}
      ></textarea>
      <button className="submit-button" onClick={handleSubmit}>Post Answer</button>
    </div>
  );
};

export default AnswerForm;