
describe("Pruebas de Buscador de Google.", function(){
	beforeEach(function(){
		// Entramos a Google
		cy.visit("www.google.cl")
	});

	// Casos de Prueba
	// it("Lanzando multiples busquedas", function() {

	// 	//Barra de Busqueda y Busqueda
	// 	cy.get('.gLFyf')
	// 	.type("Pruebas de usuario {enter}")
	// });

	it("Probando el completador de busqueda", function(){
		var string = "Pruebas de usuario"
		var char
		var end = false

		cy.get('.gLFyf')
		.clear()
		.then(function($textbar){
			//Empezamos a buscar por string.
			

			cy.get('.aajZCb')
			.within(function(){
				for (char of string){
					if (end){
						break;
					}

					cy.wrap($textbar).type(char)
					cy.get('.sbl1')
					.each(function($value){
						if (string.toLowerCase() == $value.text().toString().toLowerCase()){
							cy.log("encontramos antes")
							cy.wrap($value).click()
							end = true
							return false
						}
						
					});
				}

			});
			
		});


	
		//cy.get('.erkvQe > :nth-child(1)')
	});
});