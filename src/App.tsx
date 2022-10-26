import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

//Pages
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<SearchPage />}
          />
          <Route
            path={`/:searchName`}
            element={<ProductListPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
