import './App.css';
import starIcon from './icon-star.svg';
import minusIcon from './icon-minus.svg';
import plusIcon from './icon-plus.svg'
import { useState } from 'react';

function QuestionAnswer({question, answer, showAnswer, onQuestionClick, index}) {
  const icon = showAnswer ? minusIcon : plusIcon;
  const displayStyle = showAnswer ? "inline-block" : "none"

  function onClick() {
    onQuestionClick(index);
  }

  return (
    <div className="QuestionAnswer">
      <h2 onClick={onClick}><p>{question}</p><img src={icon}/></h2>
      <div className="answer" style={{display: displayStyle}}>
        {answer}
      </div>
    </div>
  );
}

function App() {
  const [questionAnswers, setQuestionAnswers] = useState([
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
      all levels and ideal for portfolio building.`,
      showAnswer: true
    },
    {
      question: "Is Frontend Mentor free?",
      answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free
      option providing access to a range of projects suitable for all skill levels.`,
      showAnswer: false
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!`,
      showAnswer: false
    },
    {
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
      channel where you can ask questions and seek support from other community members.`,
      showAnswer: false
    }
  ]);

  function onQuestionClick(index) {
    const newQuestionAnswers = questionAnswers.map((qa, i) => {
      return i == index ? {question: qa.question, answer: qa.answer, showAnswer: !qa.showAnswer } : qa;
    });
    setQuestionAnswers(newQuestionAnswers);
  }
  
  return (
    <div className="App">
      <div className="card">
        <h1><img src={starIcon}/>FAQs</h1>
        {questionAnswers.map(({question, answer, showAnswer}, index) => {
          return (<QuestionAnswer
            question={question}
            answer={answer}
            showAnswer={showAnswer}
            onQuestionClick={onQuestionClick}
            index={index}
          />)
        })}
      </div>


      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/rainearcher">Raine Soriano</a>.
      </div>
    </div>
  );
}

export default App;
