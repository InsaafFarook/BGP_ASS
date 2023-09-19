import { LoginData } from '../fixtures/LoginData.json';
import { grantData } from '../fixtures/grantDataProvider.json';
import * as Home from '../lib/functions/HomeFunctions';
import * as ContactDetails from '../lib/functions/ContactDetailsFunction';
import * as CommonFunctions from '../lib/functions/CommonFunctions';
import * as MenuNavigation from '../lib/helpers/LeftMenuNavigationHelper';


describe('User Story 2 : Verify Contact Details Section', () => {

  beforeEach(() => {
    cy.loginSession(LoginData.username, LoginData.password, LoginData.entityId, LoginData.userId, LoginData.userRole, LoginData.userFullName);
    cy.visit('https://qa-internet.bgp.onl/dashboard');
    Home.getNewGrant('IT', 'International Expansion', 'Market Readiness Assistance');
    MenuNavigation.navigateToMenuItem('Contact Details');
  });

  it('[AC 1] Verifying the Main Contact Details Section', () => {    
    ContactDetails.verifyMainContactPersonSection();    
  });

  it('[AC 1 - 1] Verify invalid email alert', () => {
    ContactDetails.enterEmail('asds@asd');
    ContactDetails.verifyInvalidEmailError();

    ContactDetails.enterAlternateEmail('aasdasd');
    ContactDetails.verifyInvalidEmailError();
  });

  it('[AC 2 - 1] Verifying the Postal Code field error when incorrect code entered', () => {
    ContactDetails.enterPostalCode('123451');
    ContactDetails.verifyPostalCodeError();
  });

  it('[AC 2 - 2] Verifying the address is auto poplated for valid Postal Code', () => {
    ContactDetails.enterPostalCode(grantData.postalCode);
    ContactDetails.verifyAddressPopulatedViaPostalCode();
  });

  it('[AC 3] Verifying the registered address is auto poplated', () => {
    ContactDetails.selectSameAsCompanyAddress(true);
    ContactDetails.verifyRegisteredAddressPopulated(LoginData.block, LoginData.street, LoginData.level, LoginData.unit, LoginData.buildingName);
  });

  it('[AC 4] Verifying the Letter of Offer Addressee Section', () => {
    ContactDetails.verifyLetterOfOfferAddresseeSection();
  });

  it('[AC 5] Verifying the Letter of Offer Addressee Section is auto populated from main contact', () => {
    ContactDetails.enterMainContactDetails(grantData.name, grantData.jobTitle, grantData.contactNo, grantData.email, grantData.altEmail);
    ContactDetails.selectSameAsMainContact(true);
    ContactDetails.verifyLetterOfOfferAddresseeDetailsPopulated(grantData.name, grantData.jobTitle, grantData.email);
  });

  it('[AC 6] Verify user can Save the inputs successfully', () => {
    ContactDetails.enterMainContactDetails(grantData.name, grantData.jobTitle, grantData.contactNo, grantData.email, grantData.altEmail);
    ContactDetails.selectSameAsCompanyAddress(grantData.selectSameAsCompanyAddress);
    ContactDetails.selectSameAsMainContact(grantData.selectSameAsMainContact);
    CommonFunctions.saveInputs();

    ContactDetails.verifyMainContactDetails(grantData.name, grantData.jobTitle, grantData.contactNo, grantData.email, grantData.altEmail);
    ContactDetails.verifyRegisteredAddressPopulated(LoginData.block, LoginData.street, LoginData.level, LoginData.unit, LoginData.buildingName);
    ContactDetails.verifyLetterOfOfferAddresseeDetailsPopulated(grantData.name, grantData.jobTitle, grantData.email);
  });
})