function formulario(f){

if(f.nombre.value==''){alert("debe ingresar nombre");
    f.nombre.focus(); return false;}

if(f.nombre.value.length>10){alert("nombre debe ser menor a 10 digitos");
    f.nombre.focus(); return false;}

if(f.edad.value==''){alert("debe ingresar edad");
    f.edad.focus(); return false;}


if(isNaN(f.edad.value)){alert("debe ingresar solo numeros");
    f.edad.focus();return false;}


if(f.edad.value > 150){alert("la edad no debe superar los 150 años");
    f.edad.focus();return false;}



}

function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            alert("debe ingresar solo letras");return false;
        }
    }




