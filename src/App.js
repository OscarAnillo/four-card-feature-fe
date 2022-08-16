import TextComponent from './components/text-component';

import {supervisor, supervisorText, supervisorImg, teamBuilder, teamBuilderText, teamBuilderImg, karma, karmaText, karmaImg, calculator, calculatorText, calculatorImg} from './data/page-data'

import './App.css';
import CardComponent from './components/card-component';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <TextComponent />
        <CardComponent cardTitle={supervisor} cardParagraph={supervisorText} cardImg={supervisorImg} />
        <CardComponent cardTitle={teamBuilder} cardParagraph={teamBuilderText} cardImg={teamBuilderImg} />
        <CardComponent cardTitle={karma} cardParagraph={karmaText} cardImg={karmaImg} />
        <CardComponent cardTitle={calculator} cardParagraph={calculatorText} cardImg={calculatorImg} />
      </div>
    </div>
  );
}

export default App;
