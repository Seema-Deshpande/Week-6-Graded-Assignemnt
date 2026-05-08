import './AnswerList.css';
import VoteButtons from '../Shared/VoteButtons';

const AnswerList = ({ answers }) => {
  const answerArray = answers || [];

  return (
    <div className="answer-list">
      <h2>{answerArray.length} {answerArray.length === 1 ? 'Answer' : 'Answers'}</h2>
      {answerArray.length === 0 ? (
        <p className="empty-state">No answers yet. Be the first to answer this question!</p>
      ) : (
        answerArray.map((answer) => (
          <div key={answer._id} className="answer-card">
            <div className="answer-card-body">
              <VoteButtons
                voteCount={answer.voteCount}
                onUpvote={() => alert('Upvote clicked for answer: ' + answer._id)}
                onDownvote={() => alert('Downvote clicked for answer: ' + answer._id)}
              />
              <div className="answer-content-wrapper">
                <p className="answer-text">{answer.answerText}</p>
                <div className="answer-meta">
                  <span className="answer-author">By {answer.author?.name || 'Anonymous'}</span>
                  {answer.createdAt && (
                    <span className="answer-date">
                      {new Date(answer.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'short', day: 'numeric'
                      })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AnswerList;