import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
