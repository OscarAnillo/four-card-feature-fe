import TextComponent from './components/text-component';
import CardComponent from './components/card-component';
import { pageData } from './data/page-data';

import './App.css';

function App() {

  return (
    <div className="App">
      <div className="container">
        <TextComponent />
        {pageData.map(item => (
          <CardComponent cardTitle={item.name} cardParagraph={item.text} cardImg={item.image} className={item.className} />
        ))}
        
      </div>
    </div>
  );
}

export default App;

