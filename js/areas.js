// area de triangulo

let a= Number(prompt('Ingrese altura de triangulo'));
let b= Number(prompt("Ingrese base del triangulo"));


if (isNaN(a) || isNaN(b)){
    alert('Ingrese un numero valido')
}else{
 console.log((b*a)/2);   
}

// area de circulo
let r = Number(prompt('Ingrese el radio del circulo'));
const  pi= 3.1415
let area=pi*(r**2)

if (isNaN(r)){
    alert('Ingrese un numero valido')
}else{
 console.log(area.toFixed(2));   
}



