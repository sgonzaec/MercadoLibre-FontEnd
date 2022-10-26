import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
        <Router>
         <Routes>
           <Route path="/" element={<SearchPage />} /> 
         </Routes>
        </Router>
    </div>
  );
}

export default App;
