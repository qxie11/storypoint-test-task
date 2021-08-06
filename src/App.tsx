import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Pages
import ImageInfo from "./pages/ImageInfo";
import Index from "./pages/Index";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/images" component={ImageInfo} />
          <Redirect to="/" />
        </Switch>
      </Router>
  );
}

export default App;
