import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import UsersContainer from './components/Users/UsersContainer';
import WithURLProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Social network</h1>
        <Route path = '/profile/:userid?' render = { () => <WithURLProfileContainer/> } />
        <Route path = '/users' render = { () => <UsersContainer/> } />
        <Route path = '/messages' render = { () => {} } />
      </div>
    </BrowserRouter>
  );
}

export default App;
