import { LoginData} from '../fixtures/LoginData.json';
import * as Home from '../lib/functions/HomeFunctions';
import * as Eligibility from '../lib/functions/EligibilityFunctions';
import * as CommonFunctions from '../lib/functions/CommonFunctions';



describe('User Story 1 : Verify Eligibility Section', () => {

  beforeEach(() => {
    cy.loginSession(LoginData.username, LoginData.password, LoginData.entityId, LoginData.userId, LoginData.userRole, LoginData.userFullName);
    cy.visit('https://qa-internet.bgp.onl/dashboard');
    Home.getNewGrant('IT', 'International Expansion', 'Market Readiness Assistance');
  });

  it('[AC 1, AC 2] Verify the Questions and Radion buttons in Eligibility Section', () => {
    Eligibility.verifyQuestionsAndRadioButtons();
  });

  it('[AC 3, AC 4] Verifying the Warning messages and FAQ when selecting No as answer for the questions', () => {
    Eligibility.verifyWarningMessage();
  });

  it('[AC - 5 ] Verify user can Save the inputs successfully', () => {
      let answers = [true, true, false, true, false];

      Eligibility.setValuesForEligibilityQuestions(answers);
      CommonFunctions.saveInputs();
      Eligibility.verifySelectionForEligibilityQuestions(answers);
  });
})
