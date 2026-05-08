import AnswerForm from '../../components/Answer/AnswerForm';
import AnswerList from '../../components/Answer/AnswerList';
import QuestionContent from '../../components/Question/QuestionContent';
import './QuestionDetail.css';
import { useEffect, useState } from 'react';
import { questions } from '../../../data/questions';

const QuestionDetail = ({ id }) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundQuestion = questions.find(q => q._id === id);
      setQuestion(foundQuestion || null);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="question-detail loading-container">
        <div className="spinner"></div>
        <p>Loading question...</p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="question-detail">
        <p>Question not found.</p>
      </div>
    );
  }

  return (
    <div className="question-detail">
      <QuestionContent question={question} />
      <AnswerList answers={question.answers} />
      <AnswerForm />
    </div>
  );
};

export default QuestionDetail;