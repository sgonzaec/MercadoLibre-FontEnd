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
    <BreadcrumDataContainer>
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path={`/:searchName`} element={<ProductListPage />} />
            <Route path={`items/:id`} element={<ProductDetailPage />} />
          </Routes>
        </Router>
      </div>
    </BreadcrumDataContainer>
  );
}

export default App;
