import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </main>
  );
};
export default App;
