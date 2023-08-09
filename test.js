function cadastrar() {
    const nome=document.getElementById("nome").value 
    const idade=parseInt(document.getElementById("idade").value )
    const email=document.getElementById("emai").value 

const pessoa={
    nome: nome,
    idade: idade,
    email: email,
};
    document.getElementById('result').innerHTML=pessoa;
}