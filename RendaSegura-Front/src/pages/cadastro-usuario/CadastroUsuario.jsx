import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import {create} from "../../services/crud.js"

const CadastroUsuario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cpf: '',
        phone: '',
        birthDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdUser = await create(formData);
        console.log("Usuário criado:", createdUser);

        console.log("Dados do formulário a serem enviados:", formData);
        alert('Cadastro realizado com sucesso! (Verifique o console para ver os dados)');
    }

    return (
    <Container component="main" maxWidth="sm">
      <Box
        component="form" // O Box agora funciona como um formulário
        onSubmit={handleSubmit}
        className="mt-12 p-8 bg-white rounded-lg shadow-lg" // Classes do Tailwind para estilo e espaçamento
      >
        <Typography component="h1" variant="h5" className="text-center !mb-6">
          Cadastre-se
        </Typography>

        <TextField
          label="Nome Completo"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="CPF"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Telefone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Data de Nascimento"
          name="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={handleChange}
          
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }} // Garante que o label não sobreponha a data
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="!mt-6 !py-3" // Usando ! para sobrescrever estilos do MUI se necessário
        >
          Cadastrar
        </Button>
      </Box>
    </Container>
  );
}

export default CadastroUsuario;
