import React, { useState, useEffect } from 'react';

function UserSearchPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const resultados = usuarios.filter(usuario =>
      usuario.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsuarios(resultados);
  }, [searchTerm, usuarios]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  return (
    <div>
      <h1>Buscar Usuários</h1>
      <input
        type="text"
        placeholder="Digite o nome do usuário..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <ul>
        {filteredUsuarios.length > 0 ? (
          filteredUsuarios.map(usuario => (
            <li key={usuario.id}>{usuario.nome} - {usuario.email}</li>
          ))
        ) : (
          <p>Nenhum usuário encontrado</p>
        )}
      </ul>
    </div>
  );
}

export default UserSearchPage;
