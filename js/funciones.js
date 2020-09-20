function validar_datos(){
    var nombre = document.forms["formulario"]["nombre"].value;
    var email  = document.forms["formulario"]["email"].value;
    var telefono = document.forms["formulario"]["telefono"].value;
    var fecha = document.forms["formulario"]["fecha"].value;
    var comentario = document.forms["formulario"]["comentario"].value;
    
    
    if( (nombre =="") || (email=="") || (telefono=="") || (fecha=="") || (comentario=="") ){
        alert ("todos los campos son obligatorios");
        return false;
        
    }
    else{
        alert ("el mensaje fue enviado correctamente");
        return true;
    }
    
}