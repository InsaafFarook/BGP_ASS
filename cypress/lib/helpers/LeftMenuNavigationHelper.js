/// <reference types="cypress" />

const lnkMenuItem = '.menu-text';

export const navigateToMenuItem = (menuName) => {
    cy.get(lnkMenuItem).contains(menuName).click();
}
