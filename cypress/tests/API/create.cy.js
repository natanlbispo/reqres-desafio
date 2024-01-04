const faker = require('faker-br');
describe('CREATE API', () => {
    it.only('Creating user', () => {
        const name = faker.name.firstName();
        const job = faker.name.department()
        cy.createUser(name, job);
    })
})