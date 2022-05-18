import BasePage from "./BasePage";

class PracticePage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get nameInputField() {
    return cy.get("#firstName");
  }
  static get surnameInputField() {
    return cy.get("#lastName");
  }
  static get emailInputField() {
    return cy.get("#userEmail");
  }
  static get genderInputField() {
    return cy.get("#gender-radio-1");
  }
  static get numberInputField() {
    return cy.get("#userNumber");
  }
  static get selectDateOfBirth() {
    return cy.get("#dateOfBirthInput");
  }
  static get selectMonthOfBirth() {
    return cy.get(".react-datepicker__month-select");
  }
  static get subjectInputField() {
    return cy.get('.subjects-auto-complete__input');
  }
  static get hobbyField() {
    return cy.get('#hobbies-checkbox-3');
  }
  static get pictureInput() {
    return cy.get('#uploadPicture');
  }
  static get addressInput() {
    return cy.get('#currentAddress');
  }
  static get stateInput() {
    return cy.get('#state');
  }
  static get cityInput() {
    return cy.get('#city');
  }
  static get sumbitButton() {
    return cy.get('#submit');
  }
  static get comformationText() {
    return cy.get('#example-modal-sizes-title-lg');
  }
}
export default PracticePage;