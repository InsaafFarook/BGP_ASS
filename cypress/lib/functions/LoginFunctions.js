/// <reference types="cypress" />

const txtUsername = '#signInFormUsername';
const txtPassword = '#signInFormPassword';
const btnSignIn = '(//*[@name="signInSubmitButton"])[2]';
const btnLogIn = '#login-button';
const txtEntityId = '#entityId';
const txtUserId = '#userId';
const txtUserRole = '#userRole';
const txtUserFullName = '#userFullName';
const btnManualLogin = '[type="submit"]';
const lblUserInfo = '#user-info-item .username';

export const navigateToLogin = (url) => {
    cy.visit(Cypress.env(url));
}

export const loginToBGPPortal = (username, password) => {
    cy.visit('https://qa-internet.bgp.onl/');
    cy.get(txtUsername).type(username, { force: true });
    cy.get(txtPassword).type(password, { force: true });
    cy.xpath(btnSignIn).click({ force: true });
}

export const loginToBGPManually = (entityId, userId, userRole, userFullName) => {
    const sentArgs = { eId: entityId, uId: userId, uRole: userRole, uFName: userFullName, loginBtn: btnLogIn, txtEId: txtEntityId, txtUId: txtUserId, txtURole: txtUserRole, txtFName: txtUserFullName, btnManLogin: btnManualLogin, lblUInfo: lblUserInfo }

    cy.origin('https://qa-internet.bgp.onl', { args: sentArgs }, ({ eId, uId, uRole, uFName, loginBtn, txtEId, txtUId, txtURole, txtFName, btnManLogin, lblUInfo }) => {

        cy.get(loginBtn).click();
        cy.get(txtEId).type(eId);
        cy.get(txtUId).type(uId);
        cy.get(txtURole).type(uRole);
        cy.get(txtFName).type(uFName);
        cy.get(btnManLogin).click();
        cy.get(lblUInfo).invoke('text').should('contain', uFName);
    });
}


