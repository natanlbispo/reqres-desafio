const faker = require('faker-br');
import createSchema from './contract/create.contracts';
describe('CREATE API', () => {
    it('Creating user', () => {
        const name = faker.name.firstName();
        const job = faker.name.jobTitle();
        cy.createUser(name, job);
    })

    it.only('Create Contract', () => {
        const name = faker.name.firstName();
        const job = faker.name.jobTitle();
        cy.createUser(name, job).then(response => {
            return createSchema.validateAsync(response.body);
        });
    })
})