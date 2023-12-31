import './App.css';
import starIcon from './icon-star.svg';
import minusIcon from './icon-minus.svg';

function App() {
  return (
    <div className="App">
      <div className="card">
        
        <h1><img src={starIcon}/>FAQs</h1>
        <h2><p>What is Frontend Mentor, and how will it help me? </p><img src={minusIcon}/></h2>
        Frontend Mentor offers realistic coding challenges to help developers improve their
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
        all levels and ideal for portfolio building.
        Is Frontend Mentor free?
        Yes, Frontend Mentor offers both free and premium coding challenges, with the free
        option providing access to a range of projects suitable for all skill levels.
        Can I use Frontend Mentor projects in my portfolio?
        Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!
        How can I get help if I'm stuck on a Frontend Mentor challenge?
        The best place to get help is inside Frontend Mentor's Discord community. There's a help
        channel where you can ask questions and seek support from other community members.
      </div>


      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/rainearcher">Raine Soriano</a>.
      </div>
    </div>
  );
}

export default App;
