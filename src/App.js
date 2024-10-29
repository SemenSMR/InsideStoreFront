import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './component/Auth/RegisterForm';
import LoginForm from './component/Auth/LoginForm';
import './component/style/App.css';

function App() {
    return (
        <div>
            <h1 className="app-title">InsideStore</h1>
            <Routes>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
            </Routes>
        </div>
    );
}

export default App;