import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51PLjYEDxVY9FsEPMbF0BQBCyKWZhOBB7jcTIYDgHWj9kXNIWS2wkkkDAM55seKmnBOt7fEIIAwR3eA0OhSli9MAL00T3Y2IuuF"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
