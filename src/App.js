import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quote from "./pages/quote";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

// const API_URL = "https://quotes-mern-website.herokuapp.com/";
const API_URL = "https://quotes-jfuc.onrender.com/";

function App() {
    const [quotes, setQuotes] = useState([]);

    const user = localStorage.getItem('token');
    
    useEffect(() => {
        const get = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setQuotes(data);
        };
        get();
    }, []);
    
    return (
        <>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Quote props={quotes} />} />
                        {user && <Route path="/dashboard" exact element={<Dashboard props={quotes} />} />}
                        <Route path="/dashboard" exact element={<Navigate to='/login' />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/Register" exact element={<Register />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
