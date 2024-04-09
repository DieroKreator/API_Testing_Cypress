describe('template spec', () => {
    it('passes', () => {
    //Getting response from browserstack demo website 
    cy.request('GET','/v2/pet/191').then((response) =>{
    //Expecting the response status code to be 200
    expect(response.status).to.eq(200)
    })
    })
    })