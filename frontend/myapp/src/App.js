import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <Router>
            <Switch>
              <Route exact path="/"> //ici on met l'URL dans le navigateur
                <Home /> //ici on donne la page à afficher en fonction de cette URL
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
        </Router>
  );
}

export default App;