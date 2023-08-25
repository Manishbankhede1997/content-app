import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./Pages/contantPage/Content";
import store from "./Redux/Store";
import ContentScreen from "./components/ContentScreen";
import { Provider } from "react-redux";
import EditContent from "./components/EditContent";
import LineGraph from "./components/LineGraph";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/contentScreen" element={<ContentScreen />} />
            <Route path="/editContent" element={<EditContent />} />
            <Route path="/lineGraph" element={<LineGraph />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
