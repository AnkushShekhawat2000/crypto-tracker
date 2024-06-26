import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/coin/:id" element={<CoinPage/>}/>
            <Route path="/compare" element={<ComparePage />}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}


// <Route path="/watchlist" element={<WatchlistPage/>}/>
export default App;
