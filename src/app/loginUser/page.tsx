'use client'

import React, { useState } from 'react';
import styles from './loginUser.module.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginData = { email, password };

        try {
            const response = await axios.post('http://192.168.247.103:8080/users/login', {email, password}, {
                headers: {"Content-Type": "application/json"}
            });
            console.log('Usuário logado com sucesso', response.data)
            console.log('Usuário logado com sucesso', response.data.token)
            localStorage.setItem('token', response.data.token) // armazenando no localStorage
            localStorage.setItem('userId', response.data._id)
            alert(`${response.data.user.firstname} logado com sucesso`)
        } catch (error: any) {
            console.error('Erro ao fazer login:', error.response?.data?.message);
            alert('Erro ao fazer login.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <div className={styles.passwordField}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className={styles.showPasswordButton}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? 'Esconder' : 'Mostrar'}
                        </button>
                    </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
