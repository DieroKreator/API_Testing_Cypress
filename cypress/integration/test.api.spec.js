describe('API Testing', () => {

    it('API - POST - Add a new pet to the store', () => {

            const pet = require('cypress/fixtures/json/pet1.json')
            
            cy.request({method: 'POST', url: '/pet', body: {
                    "id": 602740501,
                    "name": "Magnum",
                    "category_id": 1,
                    "category_name": "Team lead",
                    "tag_id": 1,
                    "tag_name": "vacinado",
                    "status": "available"
                }}).then((response) =>{
                    //Asserting the status code to be 200 for successful execution
                    expect(response.status).to.eq(200)
                    expect(response.body.id).to.eq(pet.id)
                    expect(response.body.name).to.eq(pet.name)
            })
        })

    it('API - GET - Find pet by ID', () => {
        const pet = require('cypress/fixtures/json/pet1.json')
            //Getting response from petstore demo website 
        cy.request('GET',
                    '/v2/pet/602740501'
                    ).then((response) =>{
            //Expecting the response status code to be 200
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(pet.id)
            expect(response.body.name).to.eq(pet.name)
        })
    })

    it('API - PUT - Update an existing pet', () => {
        
        const pet = require('cypress/fixtures/json/pet2.json')
        
        cy.request({method: 'PUT', url: '/pet', body: {
                "id": 602740501,
                "name": "Magnum",
                "category_id": 1,
                "category_name": "Team lead",
                "tag_id": 1,
                "tag_name": "vacinado",
                "status": "sold"
            }}).then((response) =>{
                //Asserting the status code to be 200 for successful execution
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(pet.id)
                expect(response.body.name).to.eq(pet.name)
                expect(response.body.name).to.eq(pet.status)
        })
    })

    it('API - DELETE - Deletes a pet', () => {
        const pet = require('cypress/fixtures/json/pet1.json')
            //Getting response from petstore demo website 
        cy.request('DELETE',
                    '/v2/pet/602740501'
                    ).then((response) =>{
            //Expecting the response status code to be 200
            expect(response.status).to.eq(200)
            expect(response.body['code']).to.eq(200)
            expect(response.body['type']).to.eq('unknown')
            expect(response.body['message']).to.eq(str(pet.id))
        })
    })

})