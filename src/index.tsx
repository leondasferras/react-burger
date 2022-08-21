import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';

import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./services/store";

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement as Element);
root.render(

  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

reportWebVitals();
