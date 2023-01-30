var formulario= document.querySelector("formulario")
const mensaje= document.querySelector("#mensaje")



console.log(formulario)

function ascii(){
    var caracteres=[]
    var valor = mensaje.value;
    for( var i=0; i<valor.length; i++){
        console.log(valor)
        caracteres[i]=valor.charAt(i).charCodeAt(0);
        
    }
    return caracteres;
}
function num_binario(){
    var aux;
    var lista=[];
    var respuesta=[];
    lista=ascii();
    lista.toString(2);
    for (let i = 0; i < lista.length; i++) {
        if ((lista[i].toString(2)).length<8) {
            if ((lista[i].toString(2)).length<7) {
                aux="00"+lista[i].toString(2);
                console.log("aux ultimo problema",aux);
            }else{
                aux="0"+lista[i].toString(2);
            }
            respuesta.push(aux);
        }else{
        respuesta.push(lista[i].toString(2));
        }
        
    }
    return respuesta;

}

function convertir(){
    var cdascii=[]
    var caracter=[]
    var listado="";
    caracter=num_binario();
    let inicio="<th>Codigo</th><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th>";
    document.getElementById('head').innerHTML=inicio;

    for(var i=0; i< caracter.length; i++){
        listado+="<tr>" ;
        listado+="<td>"+ascii()[i]+"</td>"
        for (let j = 0; j < 8; j++) {
            listado +="<td>"+caracter[i][j]+"</td>";
        }
        listado+= "</tr>";
    }
    document.getElementById('tabla').innerHTML = listado;


}
function cancelar(){
    var limpio="";
    document.getElementById('tabla').innerHTML = limpio;
    document.getElementById('mensaje').value=limpio;
    document.getElementById('head').innerHTML= limpio;
}
