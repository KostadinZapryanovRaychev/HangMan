
import './App.css';
import Hangman from './components/HangMan';
import Header from './components/Header';
import Main from './components/Main';
import Word from './components/Word';
import { ApplicationContext } from './context/ApplicationContext';

function App() {
  return (
    <div className="App">
      <ApplicationContext>
        <Header></Header>
        <Main></Main>
      </ApplicationContext>   
    </div>
  );
}

export default App;
