"use client"

import React, { useState } from 'react';
import styles from './createUser.module.css';
import axios from 'axios';

const CreateUser = () => {
    const [firstname, setFirstName] = useState('');
    const [allname, setAllName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            firstname,
            allname,
            email,
            password,
        };

        // Enviar os dados para o backend via API (ajustar a URL conforme necessário)
        try {
            const response = await axios.post('http://192.168.247.104:8080/users/post', userData, {
                headers: {"Content-Type": "application/json"}
            });
            console.log('Usuário criado com sucesso', response.data)
            alert('Usuário criado com sucesso')
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastro de Usuário</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        className={styles.input}
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="allName">All Name</label>
                    <input
                        type="text"
                        id="allName"
                        className={styles.input}
                        value={allname}
                        onChange={(e) => setAllName(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <div className={styles.passwordField}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            className={styles.input}
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
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
