import PracticePage from "../pageObjects/PracticePage";

context("Elements Page", () => {
  context("Practice page scenarios", () => {
    beforeEach(() => {
      PracticePage.visit();
    });

      it("Registration form", () => {
        PracticePage.nameInputField.type("someRandomName");
        PracticePage.surnameInputField.type("someRandomSurname");
        PracticePage.emailInputField.type("Random123@va.lv");
        PracticePage.genderInputField.click({ force: true }).should('be.checked');
        PracticePage.numberInputField.type(2139463928);
        //PracticePage.selectDateOfBirth.click();
        //PracticePage.selectMonthOfBirth.click();
        PracticePage.subjectInputField.type("Eco{enter}");
        PracticePage.hobbyField.check({ force: true}).should('be.checked');
        const filePicture = 'aug.jpg';
        PracticePage.pictureInput.click();
        PracticePage.addressInput.type("Some Random Address");
        PracticePage.stateInput.type("nc{enter}").should("contain", "NCR");
        PracticePage.cityInput.type("de{enter}").should("contain", "Delhi");
        PracticePage.sumbitButton.click();
        PracticePage.comformationText.should("contain", "Thanks for submitting the form");
    });
  });
});