
import './App.css';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ProductListing from "./containers/ProductListing"
import ProductDetail from "./containers/ProductDetail"
import Header from "./containers/Header"

function App() {
  return (
    <h1 className="App">
      <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={ProductListing}/>
        <Route path="/product/:product" exact  component={ProductDetail}/> 
        <Router>404 Not Found</Router>
        </Switch>
      </Router>
    </h1>
  );
}      

export default App;
