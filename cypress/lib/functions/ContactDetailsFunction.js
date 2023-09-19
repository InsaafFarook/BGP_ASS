/// <reference types="cypress" />

const mainContactSubSection = '.subsection-title h3';
const txtName = '#react-contact_info-name';
const txtJobTitle = '#react-contact_info-designation';
const txtContactNo = '#react-contact_info-phone';
const txtEmail = '#react-contact_info-primary_email';
const txtAlternateEmail = '#react-contact_info-secondary_email';
const txtPostalCode = '#react-contact_info-correspondence_address-postal';
const btnSearchPostalCode  = '#react-contact_info-correspondence_address-postal-postal';
const lblPostalCodeError = '#react-contact_info-correspondence_address-postal-alert';
const chkSameAsCompAddress = '#react-contact_info-correspondence_address-copied'
const txtBlockHouseNo = '#react-contact_info-correspondence_address-block';
const txtStreet = '#react-contact_info-correspondence_address-street';
const txtLevel = '#react-contact_info-correspondence_address-level';
const txtUnit = '#react-contact_info-correspondence_address-unit';
const txtBuildingName = '#react-contact_info-correspondence_address-building_name';
const txtNameOfAddressee = '#react-contact_info-offeree_name';
const txtJobTitleOfAddressee = '#react-contact_info-offeree_designation';
const txtEmailOfAddressee = '#react-contact_info-offeree_email';
const chkSameAsMainContact = '#react-contact_info-copied';
const lblInvalidEmailError = '[id*="email-alert"]';

export const verifyMainContactPersonSection = () => {
    cy.get(mainContactSubSection).first().invoke('text').should('eq', 'Main Contact Person');

    cy.get(txtName).should('be.visible');
    cy.get(txtJobTitle).should('be.visible');
    cy.get(txtContactNo).should('be.visible');
    cy.get(txtEmail).should('be.visible');
    cy.get(txtAlternateEmail).should('be.visible');
    cy.get(txtPostalCode).should('be.visible');
}

export const enterPostalCode = (postalCode) => {
    cy.get(txtPostalCode).type(postalCode);
    cy.get(btnSearchPostalCode).click();
}

export const verifyPostalCodeError = () => {
    cy.get(lblPostalCodeError).should('be.visible');
    cy.get(lblPostalCodeError).invoke('text').should('contain', "We can't find the postal code. Please try again");
}

export const verifyAddressPopulatedViaPostalCode = () => {
    cy.get(txtBlockHouseNo).invoke('val').should('not.be.empty');
    cy.get(txtStreet).invoke('val').should('not.be.empty');
}

export const selectSameAsCompanyAddress = (status) => {
    if (status=true) {
        cy.get(chkSameAsCompAddress).check();
    } else {
        cy.get(chkSameAsCompAddress).uncheck();
    }
    
} 

export const verifyRegisteredAddressPopulated = (block, street, level, unit, buildingName) => {
    cy.get(txtBlockHouseNo).invoke('val').should('eq', block);
    cy.get(txtStreet).invoke('val').should('eq', street);
    cy.get(txtLevel).invoke('val').should('eq', level);
    cy.get(txtUnit).invoke('val').should('eq', unit);
    cy.get(txtBuildingName).invoke('val').should('eq', buildingName);
}

export const verifyLetterOfOfferAddresseeSection = () => {
    cy.get(mainContactSubSection).last().invoke('text').should('eq', 'Letter Of Offer Addressee');

    cy.get(txtNameOfAddressee).should('be.visible');
    cy.get(txtJobTitleOfAddressee).should('be.visible');
    cy.get(txtEmailOfAddressee).should('be.visible');
}

export const enterMainContactDetails = (name, jobTitle, contactNo, email, altEmail) => {
    cy.get(txtName).type(name);
    cy.get(txtJobTitle).type(jobTitle);
    cy.get(txtContactNo).type(contactNo);
    cy.get(txtEmail).type(email);
    cy.get(txtAlternateEmail).type(altEmail);
}

export const verifyMainContactDetails = (name, jobTitle, contactNo, email, altEmail) => {
    cy.get(txtName).invoke('val').should('eq', name);
    cy.get(txtJobTitle).invoke('val').should('eq', jobTitle);
    cy.get(txtContactNo).invoke('val').should('eq', contactNo);
    cy.get(txtEmail).invoke('val').should('eq', email);
    cy.get(txtAlternateEmail).invoke('val').should('eq', altEmail);
}

export const selectSameAsMainContact = (status) => {
    if (status=true) {
        cy.get(chkSameAsMainContact).check();
    } else {
        cy.get(chkSameAsMainContact).uncheck();
    }
} 

export const verifyLetterOfOfferAddresseeDetailsPopulated = (name, jobTitle, email) => {
    cy.get(txtNameOfAddressee).invoke('val').should('eq', name);
    cy.get(txtJobTitleOfAddressee).invoke('val').should('eq', jobTitle);
    cy.get(txtEmailOfAddressee).invoke('val').should('eq', email);
}

export const enterEmail = (value) => {
    cy.get(txtEmail).type(value).tab();
}

export const enterAlternateEmail = (value) => {
    cy.get(txtAlternateEmail).type(value).tab();
}

export const verifyInvalidEmailError = () => {
    cy.get(lblInvalidEmailError, {timeout : 10000}).should('be.visible');
    cy.get(lblInvalidEmailError).invoke('text').should('contain', "Oops, that doesn't seem like a valid email address");
}
