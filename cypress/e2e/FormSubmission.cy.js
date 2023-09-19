import { LoginData } from '../fixtures/LoginData.json';
import { grantData } from '../fixtures/grantDataProvider.json';
import * as Home from '../lib/functions/HomeFunctions';
import * as Eligibility from '../lib/functions/EligibilityFunctions';
import * as ContactDetails from '../lib/functions/ContactDetailsFunction';
import * as MenuNavigation from '../lib/helpers/LeftMenuNavigationHelper';


describe('User Story 3 : Verify Contact Details Section', () => {

  beforeEach(() => {
    cy.loginSession(LoginData.username, LoginData.password, LoginData.entityId, LoginData.userId, LoginData.userRole, LoginData.userFullName);
    cy.visit('https://qa-internet.bgp.onl/dashboard');
    Home.getNewGrant('IT', 'International Expansion', 'Market Readiness Assistance');
  });

  // it('[AC - 1, AC - 3] Verify user navigated to read only summary view upon entering all details. ', () => {    
  //   Eligibility.setValuesForEligibilityQuestions(grantData.eligibilityInputs);
  //   ContactDetails.enterMainContactDetails(grantData.name, grantData.jobTitle, grantData.contactNo, grantData.email, grantData.altEmail);
  //   ContactDetails.selectSameAsCompanyAddress(grantData.selectSameAsCompanyAddress);
  //   ContactDetails.selectSameAsMainContact(grantData.selectSameAsMainContact);
  // });

  // it('[AC - 2] Verify mandatory error displayed.', () => {    

  // });

  // it('[AC - 4, AC - 5] Verify use can successfully submit a grant.', () => {    

  // });

  // it('[AC - 6] Verify the submitted grant is shown under processing tab', () => {    

  // });
})