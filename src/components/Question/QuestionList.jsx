import { Spinner } from 'react-bootstrap';
import QuestionCard from './QuestionCard.jsx';
import './QuestionList.css';

const QuestionList = ({ questions, loading }) => {
  return (
    <>
    {
      loading ? (
        <div className="qlist-loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="question-list">
          {questions && questions.length > 0 ? (
            questions.map((question) => (
              <QuestionCard key={question._id} question={question} />
            ))
          ) : (
            <p className="qlist-empty">No questions found. Be the first to ask a question!</p>
          )}
        </div>
      )
    }
    </>
  );
};

export default QuestionList;
