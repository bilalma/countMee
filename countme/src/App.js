import './App.css';

// data 
import data from './data/data.json'

//components
import Countme from './components/Countme';

const App = () => {
  return (
    <div>
      <div className='mt'></div>

      <div class='title'>
        <h1>Animated Counter Project with React.js and CSS </h1>
      </div>
      <div>
        {data.countit.map(count => <Countme key={count.id} data={count} />)}

      </div>
    </div>
  );
}

export default App;
