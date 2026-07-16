import { createRoot } from "react-dom/client";
import { App } from "./app.jsx";

import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "./Redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);