// main.tsx
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>
);