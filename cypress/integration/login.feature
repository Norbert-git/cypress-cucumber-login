Feature: Testing login with cucumber

    This features is for login testing

    Scenario: Succesful login

        Given You visit the login page
        When You type in the user name
        And You Type in the password
        And You click on the login button
        Then You will be logged in