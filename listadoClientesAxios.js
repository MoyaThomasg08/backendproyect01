import axios from 'axios';
const listaClientes = async () =>{
    try {
        const {data} = await axios.get("https://backendproyect01-production.up.railway.app/api/users");
        return data
    } catch (error) {
        console.log({data: error.response.data, status: error.response.status})
    }
}
const agregarCliente  = async (newClient) => {
    try {
        const {data} = await axios.post("https://backendproyect01-production.up.railway.app/api/create", newClient)
        return data
    } catch (error) {
        console.log({data:error.response.data, status: error.response.status})
    }
}