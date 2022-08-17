import TextComponent from './components/text-component';
import CardComponent from './components/card-component';
import { pageData } from './data/page-data';

import 'animate.css';

import './App.css';

function App() {

  return (
    <div className="App animate__animated animate__fadeIn">
      <div className="container">
        <TextComponent />
        <div className="row">
          {pageData.map(item => (
            <CardComponent cardTitle={item.name} cardParagraph={item.text} cardImg={item.image} className={item.className} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

