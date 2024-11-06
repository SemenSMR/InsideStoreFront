import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Иконка корзины

function Navbar() {
    return (
        <div className="navbar">
            {/* Левая часть с навигационными ссылками */}
            <div className="navbar-left">
                <Link to="/">Главная</Link>
                <Link to="/catalog">Каталог</Link> {/* Ссылка на каталог */}
            </div>

            {/* Правая часть с поисковой строкой и корзиной */}
            <div className="navbar-right">
                {/* Поисковая строка */}
                <input type="text" placeholder="Поиск..." className="search-bar" />
                {/* Иконка корзины */}
                <div className="cart-icon">
                    <FaShoppingCart />
                </div>
            </div>
        </div>
    );
}

export default Navbar;



