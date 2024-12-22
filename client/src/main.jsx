
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; 

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
