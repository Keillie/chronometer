/*variables a utilizar*/ 
document.addEventListener("DOMContentLoaded", () => {
	const $cuentatiempo = document.querySelector("#cuentatiempo"),
		$btnIniciar = document.querySelector("#iniciar"),
		$btnParar = document.querySelector("#parar"),
		$btnReiniciar = document.querySelector("#reiniciar");
	let intervalo,	empiezacontar = null,tiemporeal = null, temp = 0, hora = 0;

	function retorno (valor){
		if (valor < 10) {
			return "0" + valor;
		} else {
			return "" + valor;
		}
	}

	function transformacion (milisegundos){
		const minutos = parseInt(milisegundos / 1000 / 60);
		milisegundos -= minutos * 60 * 1000;
		segundos = (milisegundos / 1000);
		if(minutos==60){
			hora++;
		}
		return `${retorno(hora)}:${retorno(minutos)}:${retorno(segundos.toFixed(1))}`;
	}

	function iniciar(){
		tiemporeal = new Date();
		empiezacontar = new Date(tiemporeal.getTime() - temp);
		clearInterval(intervalo);
		intervalo = setInterval(actualizartime, 100);
	};

	function parar(){
		temp = new Date() - empiezacontar.getTime();
		clearInterval(intervalo);
	};

	function actualizartime(){
		tiemporeal = new Date();
		const diferencia = tiemporeal.getTime() - empiezacontar.getTime();
		$cuentatiempo.textContent = transformacion(diferencia);
	};

	function reiniciar(){
		clearInterval(intervalo);
		init();
		temp = 0;
	}

	function init(){
		$cuentatiempo.textContent = "00:00:00:0";
	};
	init();

	$btnIniciar.onclick = iniciar;
	$btnParar.onclick = parar;
	$btnReiniciar.onclick = reiniciar;
});
 