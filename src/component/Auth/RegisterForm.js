import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';

function RegisterForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email обязателен";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Некорректный email";
        }
        if (!formData.password) newErrors.password = "Пароль обязателен";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/register', formData);
            console.log('Форма отправлена:', response.data);
            // Здесь можно обработать успешный ответ, например, перенаправить на страницу входа
            setFormData({ email: '', password: '' });
            setErrors({});
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            // Здесь можно обработать ошибку, например, установить сообщение об ошибке
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Регистрация</h2>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="form-group">
                    <button type="submit" className="register-button">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
