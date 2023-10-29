import {useState} from 'react';

const questions = [
  {question: '2 x 1 =', answer: '2'},
  {question: '2 × 2 =', answer: '4'},
  {question: '2 × 3 =', answer: '6'},
  {question: '2 × 4 =', answer: '8'},
  {question: '2 × 5 =', answer: '10'},
  {question: '2 × 6 =', answer: '12'},
  {question: '2 × 7 =', answer: '14'},
  {question: '2 × 8 =', answer: '16'},
  {question: '2 × 9 =', answer: '18'},
  {question: '2 × 10 =', answer: '20'},
  {question: '5 × 1 =', answer: '5'},
  {question: '5 × 2 =', answer: '10'},
  {question: '5 × 3 =', answer: '15'},
  {question: '5 × 4 =', answer: '20'},
  {question: '5 × 5 =', answer: '25'},
  {question: '5 × 6 =', answer: '30'},
  {question: '5 × 7 =', answer: '35'},
  {question: '5 × 8 =', answer: '40'},
  {question: '5 × 9 =', answer: '45'},
  {question: '5 × 10 =', answer: '50'},
];

function Tenkey({value, onTenkeyClick, onDeleteClick, onAnswerClick}) {
  return (
      <div className="tenkey">
        <div className="tenkey_numbers">
          {[...Array(9)].map((v, i) => <button type="button" className="key" key={i + 1} value={i + 1}
                                                onClick={() => onTenkeyClick(i + 1)}>{i + 1}</button>)}
          <button type="button" className="key" key={0} value={0} onClick={() => onTenkeyClick(0)}>{0}</button>
        </div>
        <div className="tenkey_other">
          <button type="button" className="delete" value="x" onClick={onDeleteClick}>けす</button>
          <button type="button" className="answer" value="answer" onClick={onAnswerClick}>けってい</button>
        </div>
      </div>
  );
}

export default function Sansu() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inputAnswer, setInputAnswer] = useState('');
  const [currentJudgment, setCurrentJudgment] = useState('');
  const [history, setHistory] = useState([]);

  function handleTenkeyClick(number) {
    setInputAnswer(inputAnswer + String(number));
  }

  function handleDeleteClick() {
    setInputAnswer(inputAnswer.slice(0, -1) || '');
  }

  function handleAnswerClick() {
    if (inputAnswer === '') return;
    let judgement = '';
    if (inputAnswer === questions[currentQuestion].answer) {
      judgement = 'せいかい';
    } else {
      judgement = 'まちがい';
    }
    setCurrentJudgment(judgement);
    setHistory([...history, {questionId: currentQuestion, answer: inputAnswer, judgement: judgement}]);
  }

  function next() {
    setCurrentQuestion(currentQuestion + 1);
    setInputAnswer('');
    setCurrentJudgment('');
  }

  return (
      <div className="container">

        <div className="paperContainer">
          <div className="paper">
            <span className="peper_question">{questions[currentQuestion].question}</span>
            <span className="peper_answer"><input type="text" className="answer" value={inputAnswer} placeholder="?" readOnly/></span>
          </div>
          <div className="judgment">
            <p className="judgment_text">{currentJudgment}</p>
            {currentJudgment !== '' ? <button type="button" className="judgment_next" onClick={next}>つぎへ</button> : ''}
          </div>
        </div>

        <div className="operationPanel">
          <Tenkey
              onTenkeyClick={(number) => handleTenkeyClick(number)}
              onDeleteClick={() => handleDeleteClick()}
              onAnswerClick={() => handleAnswerClick()}
          />
        </div>

      </div>
  );
}