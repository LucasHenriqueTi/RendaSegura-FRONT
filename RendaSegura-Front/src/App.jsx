
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      {/* AppBar é um cabeçalho fixo no topo da página */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meu Projeto MUI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Container ajuda a centralizar e organizar o conteúdo */}
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo ao meu Projeto!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Este é um exemplo de aplicação usando Vite, React e Material-UI.
        </Typography>
        
        {/* Button é um componente de botão estilizado */}
        <Button variant="contained" color="primary">
          Clique Aqui
        </Button>
      </Container>
    </>
  );
}

export default App;