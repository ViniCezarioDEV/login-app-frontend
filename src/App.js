import React, { useState } from 'react';
import { login, register } from './api';

function App() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await login(loginData);
    if (response.error) {
      setError(response.error);
    } else {
      setError('');
      alert(`Login bem-sucedido! Bem-vindo, ${response.name}`);
      localStorage.setItem('authToken', response.token); // Armazena o token
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const response = await register(registerData);
    if (response.error) {
      setError(response.error);
    } else {
      setError('');
      alert(`Cadastro bem-sucedido! Bem-vindo, ${response.name}`);
      localStorage.setItem('authToken', response.token); // Armazena o token
    }
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
      </form>

      <h2>Cadastro</h2>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="name"
          value={registerData.name}
          onChange={handleRegisterChange}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
          placeholder="Senha"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
