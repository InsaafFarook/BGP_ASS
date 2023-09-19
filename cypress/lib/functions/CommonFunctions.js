/// <reference types="cypress" />

const btnSave = '#save-btn';
const saveSuccessMsg = '.growl-title';

export const saveInputs = () => {
    cy.get(btnSave).click();
    cy.get(saveSuccessMsg, { timeout: 10000 }).invoke('text').should('eq', 'Draft Saved');
}

