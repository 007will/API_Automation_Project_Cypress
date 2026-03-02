import 'cypress-plugin-api';

const headersServices = {
    'accept': '*/*',
    'Content-Type': 'multipart/form-data',
};

const { servicoAPI } = require('/cypress/dataTest/data_' + Cypress.env('ambiente') + '.js');
const urlApiServices = Cypress.env('api_url_services');

describe('API Test - Funcionalidades Services', () => {
    let token;
    let preCadastroResponse = {};

    // Helper function to login and set the token
    const loginAndGetToken = () => {
        cy.loginAPI(Cypress.env('services_login'), Cypress.env('password')).then((response) => {
            token = response.access_token;
        });
    };

});

it('Create services with APIs', () => {
  const EXPECTED_STATUS = 201;

  cy.loginAPI(Cypress.env('services_login'), Cypress.env('password'))
    .then((response) => {
      const token = response.access_token;

      return cy.apiPostRequestWithToken(servicoAPI, urlApiServices, token, EXPECTED_STATUS);
    })
    .then((response) => {
      // This is the result of the POST request.
      cy.log('Status recebido:', response.status);
      cy.log('Body recebido:', JSON.stringify(response.body));

      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Serviço criado com sucesso');
      expect(response.body.data.name).to.include('Services Title - API');
    });
});
