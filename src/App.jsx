import './App.css';
import { Card } from './components/Card';
import img from './img/fb9294faf06281e890389.jpg'



function App() {
  const description = 'Some quick example text to build on the card title and make up the bulk of the card`s content.'
  const title = 'Card title'

  return (
    <>
      <Card title={ title } description={ description }>
        <img src={img} className="card-img-top" alt="..."></img>
      </Card>

      <Card title={ title } description={ description }>
      </Card>
    </>
  );
}

export default App;
