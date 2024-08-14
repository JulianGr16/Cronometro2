class Temporizador{
    constructor(){
       let cronometro = prompt('Ingrese los minutos');
 
       this.minutosIniciales = parseInt(cronometro);
       this.minutos = this.minutosIniciales;
       this.segundos = 0; // Normalmente empezaríamos con 0 segundos
       this.milesimas = 0; // Normalmente empezaríamos con 0 milésimas
       this.intervalo = null;
 
    }
 
       iniciar(){
          setTimeout(() => {
          this.intervalo = setInterval(() => {
             this.milesimas--
             if(this.milesimas < 0){
                this.milesimas = 59
                this.segundos--
             }else if(this.segundos < 0){
                this.segundos = 59
                this.minutos--
             }else if(this.horas == 0 && this.minutos == 0 && this.segundos == 0){
                this.pausar()
                this.minutos = 0
                this.segundos = 0
                this.milesimas = 0
             }
             document.getElementById('temporizador').innerHTML = `${this.minutos} : ${this.segundos} : ${this.milesimas}`
          }, 50)
       })
    }
 
    pausar(){
       clearInterval(this.intervalo)
       this.intervalo = null
    }
 
    reiniciar(){
       this.minutos = this.minutosIniciales
       this.segundos = 0
       this.milesimas = 0
       document.getElementById('temporizador').innerHTML = `${this.minutos} : ${this.segundos} : ${this.milesimas}`
    }
 }
 
 const termporizador = new Temporizador()
 
 document.getElementById('iniciar').addEventListener('click', ()=>{
    termporizador.iniciar()
 })
 
 document.getElementById('pausar').addEventListener('click', ()=>{
    termporizador.pausar()
 })
 
 document.getElementById('reiniciar').addEventListener('click', ()=>{
    termporizador.reiniciar()
 })