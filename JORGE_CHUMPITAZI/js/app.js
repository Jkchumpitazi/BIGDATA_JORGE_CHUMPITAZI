window.onload = function(){ //funcion  cargar la p�gina
pantalla=document.getElementById("display"); //muestra salida 
}
x="0"; //variable guardar n�mero en pantalla
xi=1; //inicializa n�mero en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //n�mero oculto o en espera.
op="no"; //operaci�n en curso; "no" =  sin operaci�n.


function numero(xx) { //n�mero escrtito en el argumento.
         if (x=="0" || xi==1  ) { // inicializa un n�mero, 
            pantalla.innerHTML=xx; //muestra  en pantalla
            x=xx; //almacen n�mero
            if (xx==".") { //si escribimos una coma al principio del n�mero
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //almacen n�mero
               coma=1; //<> estado de la coma
               }
           }
           else { // -> escribiendo un n�mero
               if (xx=="." && coma==0) { //si escribimos una coma decimal p�r primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; // <> estado de la coma  
               }
              //segunda coma decimal no realiza ninguna acci�n.
               else if (xx=="." && coma==1) {} 
               //Resto de casos escribir un n�mero del [0-9]: 	 
               else {
				   
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el n�mero est� iniciado y podemos ampliarlo.
         }

function opuest() { 
            nx=Number(x); //conversion  n�mero
            nx=-nx; //cambiar de signo
            x=String(nx); //volver a convertir a cadena
            pantalla.innerHTML=x; //muestra en pantalla.
            }
			
function borradoTotal() {
         pantalla.innerHTML=0; //poner pantalla a 0
         x="0"; //reiniciar n�mero en pantalla
         coma=0; //reiniciar estado coma decimal 
         ni=0 //indicador de n�mero oculto a 0;
         op="no" //borrar operaci�n en curso.
         }

		 
function igualar() {
         if (op=="no") { //no hay operaci�n pendiente.
            pantalla.innerHTML=x;	//muestra el mismo n�mero	
            }
         else { //con operaci�n pendiente resolvemos
            sl=ni+op+x; // escribimos la operaci�n en una cadena
            sol=eval(sl) //convertimos la cadena a c�digo 
            pantalla.innerHTML=sol //muestra la soluci�n
            x=sol; //guardamos la soluci�n
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }

function operar(s) {
         igualar(); //si hay operaciones pendientes se realizan primero
         ni=x; //ponemos el 1� n�mero en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operaci�n.
         xi=1; //inicializar pantalla.
         }
