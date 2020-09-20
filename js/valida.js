$(function () {

    $("#formulario").validate({

        rules: {
            nombre: "required",
            email: {
                required: true,
                email: true
            },
            telefono: "required",
            fecha: "required",

        }, //rules

        messages: {
            nombre: {
                required: 'Ingresa nombre',
                nombre: 'No puede estar vacio'
            },
            email: {
                required: 'Ingresa tu correo electronico',
                email: 'Formato de correo no valido',

            },
            telefono: {
                required: 'Ingrese un numero celular',
                minlenght: 'Cantidad de Digitos Insuficientes'
            },
            
            fecha: {
                required: 'Ingrese Fecha',
                fecha   : 'Se Necesita fecha'
            },
            
            comentario:{
                required: 'Deje su comentario......',
                comentario:'Se necesita su comentario'
            },

        } //messages

    }); //$('#formulario').validate
    
    

}); //function
