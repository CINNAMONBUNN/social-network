import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import store from './store';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  console.log(store.getState())
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Social network</h1>

        <Route path = '/users' render = { () => <UsersContainer/> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
