

describe("what-i-am-testing", function(){
	it("test-case", function(){
		cy.get('.some-jquery-selector')
		.type('writing-something')
	});

	it('some-other-test-case', function(){
		//more tests...
	});
});

