// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginSession", (username, password, entityId, userId, userRole, userFullName) => {
    cy.session([username, password, entityId, userId, userRole, userFullName], () => {
        cy.visit('https://qa-internet.bgp.onl/');
        cy.get('#signInFormUsername').type(username, { force: true });
        cy.get('#signInFormPassword').type(password, { force: true });
        cy.xpath('(//*[@name="signInSubmitButton"])[2]').click({ force: true });

        cy.origin('https://qa-internet.bgp.onl', { args: [username, password, entityId, userId, userRole, userFullName] }, ([username, password, entityId, userId, userRole, userFullName]) => {
            cy.get('#login-button').click();
            cy.get('#entityId').type(entityId);
            cy.get('#userId').type(userId);
            cy.get('#userRole').type(userRole);
            cy.get('#userFullName').type(userFullName);
            cy.get('[type="submit"]').click();
            cy.get('#user-info-item .username').invoke('text').should('contain', userFullName);
        });
    });
});

// Customer Element Locator Strategy
Cypress.Commands.add('dataTestId', (dataTestId, options) => {
    cy.get(`[data-testid="${dataTestId}"]`, options);
});