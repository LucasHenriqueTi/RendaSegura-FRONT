import api from "./api.js"


const create = async (formData) => {
    try {
        const response = await api.post('/users', formData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
}

const getAll = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        throw error;
    }
}

export {
    create,
    getAll
};