window.onload=cards
const arrayString = ['Banana', 'Orange', 'Apple', 'Mango', 'uva'];

const arrayNumbers = [1, 2, 3, 4, 5, 6];

const arrayObjects = [
	{frut: 'Banana'},
	{frut: 'Orange'},
	{frut: 'Apple'},
	{frut: 'Mango'},
	{frut: 'uva'}
];
const obj = {frut: 'Banana'}

const Arrayabc = [
	{id: 1, name: 'Descuentos', title: 'Hola', activo: true},
	{id: 2, name: 'Recargos', title: 'Tortuga', activo: true},
	{id: 3, name: 'Becas', title: 'Gato', activo: false},
	{id: 4, name: 'Escuela', title: 'Paloma', activo: true},
	{id: 5, name: 'Universidad', title: 'Teve', activo: false},
	{id: 6, name: 'Works', title: 'Lapto', activo: true},
]

function eliminar(cardId){
	const index = Arrayabc.findIndex((tipo) => {
		return tipo.id === cardId
	});
	if (index > -1){
        console.log(index)
        Arrayabc.splice(index, 1) 
        cards()
 
	} else {
        console.log('No se encuentra en el array')
       
	}
}
    


function cards() {
	let caja = '';
	let index = 0;
	for (const tipo of Arrayabc) {
		caja += `<div class="card">
					<div class="container">
						posicion ${ index }
						</br>
						ObjectId ${ tipo.id  }
						<h4><b> ${ tipo.name } </b></h4>
						<p> ${ tipo.title } </p>
						<button onclick="eliminar(${ tipo.id })">Eliminar</button>
					</div>
			      </div>`

		index++;
	}
	document.getElementById("contenedor").innerHTML = caja;

}

function run() {

	console.log('For 1 tamaño del array=' + arrayString.length)
	for (let i = 0; i < arrayString.length; +i++) {
		console.log('indice:' + i + ' valor:' + arrayString[i])
	}

	console.log('For 2 tamaño del array=' + arrayString.length)
	for (const fruts of arrayObjects) {
		console.log(fruts.frut)
	}

	console.log('For 3 tamaño del array=' + arrayString.length)
	for (let i = 0; i < arrayObjects.length; +i++) {
		console.log('indice:' + i + 'valor:' + arrayObjects[i].frut)
	}


	console.log('for 4 tamaño del array=' + Arrayabc.length)
	for (const id of Arrayabc) {
		console.log(id.name)
	}


	console.log('for 5 tamaño del array=' + Arrayabc.length)
	for (let i = 0; i < Arrayabc.length; +i++) {
		console.log('id' + i + 'name:' + Arrayabc[i].name)

	}

	console.log('objecto ' + obj.frut)
}
