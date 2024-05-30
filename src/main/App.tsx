import { Provider } from "react-redux";
import store from "../store";

import { Routes } from "./routes";

export function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
