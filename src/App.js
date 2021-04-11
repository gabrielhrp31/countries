import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import HomePage from './pages/HomePage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:region?" component={HomePage} />
        <Route exact path="/country/:alpha" component={CountryPage} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter> 
  );
}

export default App;
