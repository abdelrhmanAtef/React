import React ,{Component} from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
// import './App.css';
import Navbar from './component/Navbar/Navbar';
import Index from './component/Index/Index';
import Contact from './component/Contact/Contact';
class App extends Component {
render(){
  return (
<BrowserRouter>
<div className="App">
   <Navbar/>
  <Switch>
  <Route exact path='/' component={Index}/>
   <Route path='/Contact' component={Contact}/>
  </Switch>
    </div>
</BrowserRouter>
  );
}
}

export default App;
