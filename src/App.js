import {
  Switch,
  Route
} from 'react-router-dom'

import Nav from './components/Nav'
import { 
  Home,
  Info,
  User,
  NotFound
} from './pages'

function App() {
  return (
    <div className="App">
      <Nav/>
      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* url parameter */}
        <Route exact path={["/user/:userid", "/user"]} component={User}/> 
        {/* query parameter */}
        <Route exact path={["/info?detail='user1'", "/info"]} component={Info}/>
        <Route component={NotFound} />
      </Switch> 
    </div>
  );
}

export default App;
