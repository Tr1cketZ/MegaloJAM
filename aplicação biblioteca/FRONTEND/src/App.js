import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// URL base do backend
const BASE_URL = 'http://localhost:8080/api/users';

// Componente de Login
const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      history.push('/');
    } catch (error) {
      alert('Credenciais inválidas ou erro ao fazer login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
        <button type="button" onClick={handleLogin}>Login</button>
        <div>
          <Link to="/cadastro">Cadastrar-se</Link>
        </div>
      </form>
    </div>
  );
};

// Componente de Cadastro
const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/register`, { nome, username, password });
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar');
    }
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
};

// Páginas de exemplo
const Home = () => <h2>Home Page</h2>;
const LivroList = () => <h2>Gerenciar Livros</h2>;
const UsuarioList = () => <h2>Gerenciar Usuários</h2>;

// Rota Privada
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/livros">Gerenciar Livros</Link>
                </li>
                <li>
                  <Link to="/usuarios">Gerenciar Usuários</Link>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login">
            <Login setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/cadastro" component={Cadastro} />
          <PrivateRoute path="/livros" component={LivroList} isAuthenticated={isAuthenticated} />
          <PrivateRoute path="/usuarios" component={UsuarioList} isAuthenticated={isAuthenticated} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
