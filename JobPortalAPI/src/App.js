import './App.css';
import Header from "./components/Header.js"
import Homepage from "./components/Homepage.js"
import Footer from "./components/Footer.js"
import Jobdetail from "./components/Jobdetail.js"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/jobdetail/:id"  component={Jobdetail} />
      </Switch>
      <Footer />
      </>
    </Router>
  );
}

export default App;
