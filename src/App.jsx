import { ColorBoxesContainer } from "./ColorBoxesContainer";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <ColorBoxesContainer />
    </Provider>
  );
}

export default App;
