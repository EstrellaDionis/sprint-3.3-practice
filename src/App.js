import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from '../src/components/Login'
import Friends from '../src/components/FriendForm'

function App() {
  return (
    <div className="App">
        <h1>Welcome Friends</h1>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Friends />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
