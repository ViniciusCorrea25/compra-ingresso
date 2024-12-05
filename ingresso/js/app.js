  

function comprar(){
let tipoIngresso=document.getElementById('tipo-ingresso').value
let quantidade =document.getElementById('qtd').value;
let qtdDisponivel=parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent,10); 
console.log(qtdDisponivel);
    if(quantidade>0){    
        if(quantidade<=qtdDisponivel & qtdDisponivel>=0){
            qtdDisponivel=qtdDisponivel-quantidade;
            console.log(qtdDisponivel);
            document.getElementById(`qtd-${tipoIngresso}`).innerHTML=`${qtdDisponivel}`;
        }else{
            alert(`a quantidade desejada ${quantidade} não esta disponível no momento para o tipo ${tipoIngresso}`);
        }
    }else{
        alert('a quantidade deseja esta incorreta')
    }
}