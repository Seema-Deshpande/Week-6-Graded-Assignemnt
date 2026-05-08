import './Home.css';
import { useEffect, useState } from 'react';
import QuestionList from '../../components/Question/QuestionList.jsx';
import { questions as data } from '../../../data/questions.js';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setQuestions(data);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="home-title">All Questions <span className="home-subtitle">{questions.length} questions</span></h1>
        <button className="home-ask-btn btn btn-primary" onClick={() => alert('Ask Question clicked')}>Ask Question</button>
      </div>
      <QuestionList questions={questions} loading={loading} />
    </div>
  );
};

export default Home;