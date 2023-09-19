/// <reference types="cypress" />

const getANewGrant = '#dashboard-menubox-app-apply-grant';
const btnApplyGrant = '#go-to-grant';
const btnProceed = '#keyPage-form-button';


export const getNewGrant = (sector, developmentArea, functionalArea) => {
    cy.get(getANewGrant, { timeout: 30000 }).should('be.visible').click({force: true});
    grantBusinessSector(sector);
    grantDevelopmentArea(developmentArea);
    grantFunctionalArea(functionalArea)
    cy.get(btnApplyGrant).click();
    cy.get(btnProceed).click();
}

const grantBusinessSector = (sector) => {
    switch(sector){
        case 'IT' : cy.get('#IT').click();
        break;
        case 'Retail' : cy.get('#Retail').click();
        break
        default : cy.get.apply('#Others').click();
    }
}

const grantDevelopmentArea = (developmentArea) => {
    switch(developmentArea){
        case 'International Expansion' : cy.get('[id="International Expansion"]').click();
        break;
        case 'Capability Development' : cy.get('[id="Capability Development"]').click();
        break;
        case 'Tourism' : cy.get('[id="Develop tourism experiences and events"]').click();
        break;
        default : cy.get('[id="Improve Workplace Safety And Health"]').click();
    }
}

const grantFunctionalArea = (functionalArea) => {
    switch(functionalArea){
        case 'Market Readiness Assistance' : cy.get('[id="Market Readiness Assistance 2"]').click();
        break;
        default : cy.get('[id="Market Access & Development"]').click();
    }
}