import React from 'react';
import { Link } from 'react-router-dom';
import '../component/style/App.css';

function Home() {
    return (
        <div className="home-screen">
            <h1 className="home-title">Добро пожаловать в Inside Store!</h1>
            <p className="home-description">
                Здесь вы найдете лучшие предложения и уникальные товары. Создайте аккаунт или войдите, чтобы начать покупки прямо сейчас.
            </p>
            <div className="home-buttons">
                <Link to="/register" className="home-button">Регистрация</Link>
                <Link to="/login" className="home-button">Логин</Link>
            </div>
        </div>
    );
}

export default Home;