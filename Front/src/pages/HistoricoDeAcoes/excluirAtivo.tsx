import axios from "axios"
import { returnToken } from "../../services/authToken"

export const excluirAtivo = (id:string) => {
    const token = returnToken();

    if(confirm('Deseja realmente excluir esse ativo?')){

        axios.post('/ativo/excluir', {
            token: token,
            id: id
        }).then(function(response){
            alert(response.data.message);

        }).catch(function(error){
            alert(error.response.data.message);
        })
    }

}