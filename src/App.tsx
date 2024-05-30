import { Provider } from "react-redux";
import store from "./store";

export function App() {
  return (
    <Provider store={store}>
      <h1>App</h1>
    </Provider>
  )
}
