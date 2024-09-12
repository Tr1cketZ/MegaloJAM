import { createConnection } from 'mysql2';

const connection = createConnection({
  host: '3306',
  user: 'admin',
  password: 'admin',
  database: 'biblioteca'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
  }
});

export default connection;