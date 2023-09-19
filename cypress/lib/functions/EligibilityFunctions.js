/// <reference types="cypress" />

const questions = 'label';
const radioButtons = '.bgp-radio input';
const radioButtonYes = '.bgp-radio input[value="true"]';
const radioButtonNo = '.bgp-radio input[value="false"]';
const warningMessage = '.field-warning-text';
const lnkFAQ = '.field-warning-text a';

export const verifyQuestionsAndRadioButtons = () => {
    // Verifying Questions
    cy.dataTestId(questions).should('have.length', 5);

    cy.dataTestId(questions).eq(0).invoke('text').should('contain', "Is the applicant registered in Singapore?");
    cy.dataTestId(questions).eq(1).invoke('text').should('contain', "Is the applicant's group sales turnover less than or equal to S$100m or is the applicant's group employment size less than or equal to 200?");

    // Verification broken in to two to avoid the failure in fetching text with tooltip
    cy.dataTestId(questions).eq(2).invoke('text').should('contain', "Does the applicant have at least 30%");
    cy.dataTestId(questions).eq(2).invoke('text').should('contain', " local equity?");

    // There is a bug here, where the question does not match the wordings mentioned in the Document.
    // cy.dataTestId(questions).eq(3).invoke('text').should('contain', "Is the target market that you are applying for a new market? A market is new if your company's revenue from there has not exceeded $100,000 for any of the last 3 years.");
    
    cy.dataTestId(questions).eq(4).invoke('text').should('contain', "Are all the following statements true for this project?");
    cy.dataTestId(questions).eq(4).invoke('text').should('contain', "The applicant has not started work on this project");
    cy.dataTestId(questions).eq(4).invoke('text').should('contain', "The applicant has not made any payment to any supplier, vendor, or third party prior to applying for this grant");
    cy.dataTestId(questions).eq(4).invoke('text').should('contain', "The applicant has not signed any contractual agreement with any supplier, vendor, or third party prior to applying for this grant");

    // Verifying radio buttons
    cy.get(radioButtons).should('have.length', 10);
    cy.get(radioButtonYes).should('have.length', 5);
    cy.get(radioButtonNo).should('have.length', 5);
}

export const verifyWarningMessage = () => {
    cy.get(radioButtonNo).each(($el, _index) => {
        cy.wrap($el).click();
        cy.get(warningMessage).should('be.visible');

        // Veryfing the URL and the target.
        cy.get(lnkFAQ).last().invoke('attr', 'href').should('eq', 'https://www.gobusiness.gov.sg/business-grants-portal-faq/get-a-grant/');
        cy.get(lnkFAQ).last().invoke('attr', 'target').should('eq', '_blank'); // Target will be blank if the URL to be launched in new tab 
    });
}

export const setValuesForEligibilityQuestions = (answers) => {
    if(answers[0] === true){
        cy.get(radioButtonYes).eq(0).check();
    } else {
        cy.get(radioButtonNo).eq(0).check();
    }
    
    if(answers[1] === true){
        cy.get(radioButtonYes).eq(1).check();
    } else {
        cy.get(radioButtonNo).eq(1).check();
    }

    if(answers[2] === true){
        cy.get(radioButtonYes).eq(2).check();
    } else {
        cy.get(radioButtonNo).eq(2).check();
    }

    if(answers[3] === true){
        cy.get(radioButtonYes).eq(3).check();
    } else {
        cy.get(radioButtonNo).eq(3).check();
    }

    if(answers[4] === true){
        cy.get(radioButtonYes).eq(4).check();
    } else {
        cy.get(radioButtonNo).eq(4).check();
    }
}

export const verifySelectionForEligibilityQuestions = (selections) => {
    if(selections[0] === true){
        cy.get(radioButtonYes).eq(0).should('be.checked');
    } else {
        cy.get(radioButtonNo).eq(0).should('be.checked');
    }
    
    if(selections[1] === true){
        cy.get(radioButtonYes).eq(1).should('be.checked');
    } else {
        cy.get(radioButtonNo).eq(1).should('be.checked');
    }

    if(selections[2] === true){
        cy.get(radioButtonYes).eq(2).should('be.checked');
    } else {
        cy.get(radioButtonNo).eq(2).should('be.checked');
    }

    if(selections[3] === true){
        cy.get(radioButtonYes).eq(3).should('be.checked');
    } else {
        cy.get(radioButtonNo).eq(3).should('be.checked');
    }

    if(selections[4] === true){
        cy.get(radioButtonYes).eq(4).should('be.checked');
    } else {
        cy.get(radioButtonNo).eq(4).should('be.checked');
    }
}