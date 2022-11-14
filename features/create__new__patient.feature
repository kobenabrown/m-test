Feature: Patient Registration
    Scenario: Create a new patient
        Given I am on the patient creation page
        And Window is maximized
        When I input a valid first name data for the new patient 
        And I input a valid middle name data for the new patient
        And I input a valid last name data for the new patient
        And I input a valid phone number data for the new patient
        And I input a valid birth date data for the new patient
        And I input a valid address data for the new patient
        And I click on the Add New User button
        Then The new patient should be created successfully and displayed in the User List section
        And The browser should close
