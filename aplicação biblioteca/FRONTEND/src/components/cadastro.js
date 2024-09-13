// src/components/Cadastro.js
import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    // Armazenar credenciais no localStorage
    localStorage.setItem('user', JSON.stringify({ nome, username, password }));
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <div>
          <label>Nome:</label>
          <input 
            type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
