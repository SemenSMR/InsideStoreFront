import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './component/Auth/RegisterForm';
import LoginForm from './component/Auth/LoginForm';
import './component/style/App.css';
import Home from './pages/Home';



function App() {
    return (
        <div className="app-container">
            {/* Навигация */}
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/register">Регистрация</Link></li>
                    <li><Link to="/login">Логин</Link></li>
                </ul>
            </nav>

            {/* Контент */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </div>
    );
}

export default App;


