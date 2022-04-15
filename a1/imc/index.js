window.onload = function(){

}

function clearBorder(campos){
    campos.forEach(function(campo,i){
    var campoX = "x-" + (campo.id).toString();
    document.getElementById(campoX).style.display="none";
    campo.style.borderColor="lightgray";
    })
}

function validaCampo(campos){
    validate = true;
    campos.forEach(function(campo,i){
        if(campo.value == "" || campo.value == null){
            var campoX = "x-" + (campo.id).toString();
            campo.placeholder = "Digite um valor para "+campo.name; 
            campo.style.borderColor="red"; 
            document.getElementById(campoX).style.display="block";    
            document.getElementById("result").innerHTML="";    
            validate = false;
        }
    })
    return validate;
}

function calcularImc(peso,altura){
    var  imc = peso.value/(Math.pow(altura.value,2));
    var result;
    if(imc <= 18.5){
        result = 'Magreza'
    }else if(imc <= 24.9){
        result = 'Normal'
    }else if(imc <= 30){
        result ='Sobrepeso'
    }else{
        result = 'Obesidade'
    }  
    document.getElementById("result").innerHTML= Math.round(imc).toFixed(2)+ " - " + result;
}

function calcular(){
    var peso = document.getElementById('peso');
    var altura = document.getElementById('altura');
    var campos  = [peso,altura]
    if(validaCampo(campos)){
        calcularImc(peso,altura)
        clearBorder(campos)
    }
    

}