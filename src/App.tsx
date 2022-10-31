import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

//Pages
import SearchPage from "./Pages/SearchPage/SearchPage";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";

//Context
import BreadcrumDataContainer from "./Context/BreadcrumData.context";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <BreadcrumDataContainer>
          <Header />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path={`/:searchName`} element={<ProductListPage />} />
            <Route path={`items/:id`} element={<ProductDetailPage />} />
          </Routes>
        </BreadcrumDataContainer>
      </Router>
    </div>
  );
}

export default App;
