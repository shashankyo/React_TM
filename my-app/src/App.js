import './App.css';
import {Navbar} from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";

import { Home } from './components/Home';
import { About } from './components/About';
import { CardItem } from './components/CardItem';
import { Spinners } from './components/Spinners';
import { Modal } from './components/Modal';
import { Carosol } from './components/Carosol';
import { Progress } from './components/Progress';
import Alert from './components/Alert';
import { useState } from 'react';
import TextForm from './components/TextForm';
import logo512 from './components/logo512.png'

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
    return (
        <>
        <Router>
          <Navbar/>
          <Alert alert={alert}/>

          <div className='container'>

          <Switch>
            <Route exact path="/about">
                <About className="container" header={"India is great"} subheader={"India we love you"} img={logo512}/>
            
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/card">
                <CardItem cardtitle="KGF-3" cardsub="The era of Rockey Bhai"/>
            </Route>

            <Route exact path="/spin">
                <Spinners/>
                <Spinners/>

            </Route>


            <Route exact path="/modal">
                <Modal/>
            </Route>

            <Route exact path="/caros">
                <Carosol/>
            </Route>

            <Route exact path="/prog">
                <Progress showAlert={showAlert} main="This is a practice text form" sub="This is subheading"/>

            </Route>

            <Route exact path="/text">
            <TextForm showAlert={showAlert} heading="This is a practice text form" subheading="This is subheading" />


            </Route>

            </Switch>
            </div>

          </Router>
    
        </>
        
    );
}

export default App;
