(a=2)=>a*2;
const doubleMap = numbers => numbers.map(n => n * 2);
var b=2;

function anonima(){
  var b = 1;
  console.log(b);
}

if (true){
  let b = 3;
  console.log('b',b);
}

class Poligono {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
    this.metodo = (d)=>d*3
  }
}

var lista = [{name:'pedro', age:10},{name:'juan', age:12},{name:'diego', age:13}]

lista.map(i=>i.name);
lista.map(a=>a.age)
lista.map(a=>a.age).reduce((a,b)=>a+b)
lista.filter(n=>n.age==10)
lista.find(n=>n.age==10)
