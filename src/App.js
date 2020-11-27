import "./App.css";
import MainComponent from "./components/MainComponent.jsx";
import { BrowserRouter } from "react-router-dom";
import myStore from "./redux/store.js";
import { Provider } from "react-redux";

function App() {
  //console.log("App.js : ",myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        {/*React Redux provides <Provider />,
       which makes the Redux store available to the rest of your app.
       By the using of Provider Component
       and passing store parameter in Provider Component
       the store  being Global*/}
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
