describe('Testing Pokemon API', () => {
	it('Checking keys and their value and checking the status in the Pikachu test',() => {
		cy.request('https://pokeapi.co/api/v2/pokemon/pikachu/').should((response) =>{
	
			expect(response.status).to.eq(200);
			expect(response.body).to.include.all.keys('id', 'base_experience', 'height');
		    expect(response.body.id).to.be.a('number');
		    expect(response.body.name).to.be.a('string');
		    expect(response.body.base_experience).to.be.a('number');
		    expect(response.body.height).to.be.a('number');
		    expect(response.body.weight).to.be.a('number');

		   expect(response.body.id).to.eq(25);
		   expect(response.body.base_experience).to.eq(112);
		   expect(response.body.height).to.eq(4);

		})
	});

	it('Checking keys and their value and checking the status in the Pokemon 5 test', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/5').should((response) => {
			expect(response.body).to.include.all.keys(['name', 'base_experience', 'height']);
		    expect(response.body.name).to.be.a('string');
            expect(response.body.base_experience).to.be.a('number');
		    expect(response.body.height).to.be.a('number');
            expect(response.body.name).to.eq('charmeleon');
 	        expect(response.body.base_experience).to.eq(142);
            expect(response.body.height).to.eq(11);
 		})

	});

})







  