Feature: Category

@all @negatif
Scenario: Add category data empty
    Given Make sure already logged on dashboard for access category
    When click button tambah category
    When input form category data empty
    Then Click button tambah category and showing alert failed

@all @positive
Scenario: Add category successfully
    When click button tambah category
    When input form category
    Then Click button tambah category and showing alert success

@all @positive
Scenario: Search category is found
    When input value category on the category page
    Then Click enter and showing available success