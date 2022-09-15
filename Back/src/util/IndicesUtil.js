const Axios = require("axios");

exports.indiceSelic = async function () {
    var lista = [];
    // Pega os dados da taxa selic
    await Axios.get("http://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json", {
    }).then(function(res){
        lista.push(res.data);
        return lista;
    }).catch(function(err){
        console.log(err);
        return lista;
    });
}

exports.indiceCDI = async function () {
    var lista = [];
    // Pega os dados da taxa selic
    await Axios.get("http://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados?formato=json", {
    }).then(function(res){
        lista.push(res.data);
        return lista;
    }).catch(function(err){
        console.log(err);
        return lista;
    });
}