import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";


let HelloWorld = ()=>{
  return <div className='container'><h1>React Starter</h1></div>
}

class App extends React.Component{

  render(){
    return <div className='App'>
              <Router>
                  <Route path="/" component={HelloWorld} />
              </Router>
        </div>
    }
}

export default App;