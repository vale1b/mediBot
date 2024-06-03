import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Home from "./pages/Home";
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
      
      { //Revisar de aca para abajo, es la parte del chatbot
      }
      <div className="mx-auto"> 
      <div className="flex rounded min-h-screen justify-center bg-[#0B0064]">
      <div className="w-full max-w-md flex justify-center">
        <Chatbot />
      </div>
    </div>
    </div>
    </Router>
  );
};

export default App;
