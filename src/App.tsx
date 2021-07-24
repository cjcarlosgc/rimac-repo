import './assets/styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import HomePage from './pages/Home';
import SetupPlanPage from './pages/SetupPlan';
import GratefulnessPage from './pages/Gratefulness';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/setup-plan" component={SetupPlanPage} />
          <Route exact path="/gratefulness" component={GratefulnessPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
