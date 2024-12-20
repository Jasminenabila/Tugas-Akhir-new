Feature: Kasir Aja Login Features

    @all @negative @login
    Scenario: Show error for invalid username
        Given Website kasiraja has been opened
        When User input credentials email and password with invalid username
        Then User should be able see an error message

    @all @negative @login
    Scenario: Show error for invalid password
        Given Website kasiraja has been opened
        When User input credentials email and password valid with invalid password
        Then User should be able see an error message
    
    @all @positive @login
    Scenario: Login successfully with valid credentials
        Given Website kasiraja has been opened
        When User input credentials email and password valid
        When User click button Login
        Then User should be able successfully dashboard kasirAja