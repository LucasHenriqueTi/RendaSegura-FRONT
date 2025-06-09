
import {Button, AppBar, Toolbar, Typography, Container} from '@mui/material';

import CardInfo from './componets/card-info/CardInfo';


function App() {
  return (
    // bg-gray-100 define uma cor de fundo cinza claro para toda a página
    // min-h-screen garante que o fundo ocupe a altura inteira da tela
    <div className="bg-gray-100 min-h-screen">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Projeto com MUI e Tailwind
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Usando classes do Tailwind para layout e espaçamento */}
      <main className="p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Bem-vindo ao Meu Projeto!
          </h1>
          <p className="text-gray-600">
            Combinando o poder dos componentes MUI com a agilidade do Tailwind CSS.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          {/* Exemplo de componente MUI que ainda funciona perfeitamente */}
          <Button variant="contained">Botão MUI</Button>
          
          {/* Nosso novo componente personalizado */}
          <CardInfo />
        </div>
      </main>
    </div>
  );
}

export default App;