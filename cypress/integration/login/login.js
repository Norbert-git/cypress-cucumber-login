import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("You visit the login page", () => {
  cy.visit("/")
})

When("You type in the user name", () => {
  const loginInfo = {
    userName: "standard_user",
  }
  cy.get("#user-name").type(loginInfo.userName)
})

And("You Type in the password", () => {
  const loginInfo = {
    password: "secret_sauce",
  }
  cy.get("#password").type(loginInfo.password)
})

And("You click on the login button", () => {
  cy.get("#login-button").click()
})

Then("You will be logged in", () => {
  cy.url().should("contains", "/inventory.html")
})
