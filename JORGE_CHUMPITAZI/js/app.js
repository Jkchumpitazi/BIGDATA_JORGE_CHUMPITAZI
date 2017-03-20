window.onload = function(){ //funcion  cargar la página
pantalla=document.getElementById("display"); //muestra salida 
}
x="0"; //variable guardar número en pantalla
xi=1; //inicializa número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.


function numero(xx) { //número escrtito en el argumento.
         if (x=="0" || xi==1  ) { // inicializa un número, 
            pantalla.innerHTML=xx; //muestra  en pantalla
            x=xx; //almacen número
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //almacen número
               coma=1; //<> estado de la coma
               }
           }
           else { // -> escribiendo un número
               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; // <> estado de la coma  
               }
              //segunda coma decimal no realiza ninguna acción.
               else if (xx=="." && coma==1) {} 
               //Resto de casos escribir un número del [0-9]: 	 
               else {
				   
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el número está iniciado y podemos ampliarlo.
         }

function opuest() { 
            nx=Number(x); //conversion  número
            nx=-nx; //cambiar de signo
            x=String(nx); //volver a convertir a cadena
            pantalla.innerHTML=x; //muestra en pantalla.
            }
			
function borradoTotal() {
         pantalla.innerHTML=0; //poner pantalla a 0
         x="0"; //reiniciar número en pantalla
         coma=0; //reiniciar estado coma decimal 
         ni=0 //indicador de número oculto a 0;
         op="no" //borrar operación en curso.
         }

		 
function igualar() {
         if (op=="no") { //no hay operación pendiente.
            pantalla.innerHTML=x;	//muestra el mismo número	
            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código 
            pantalla.innerHTML=sol //muestra la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }

function operar(s) {
         igualar(); //si hay operaciones pendientes se realizan primero
         ni=x; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
         }
