import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List'

import './App.css';


function App() {
  return (
    <div className='main'>
      <div className='main-container'>
        <Header/>
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
