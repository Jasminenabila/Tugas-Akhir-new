Feature: Product

@all @positive @product
Scenario: Add data product successfully
    Given Make sure already logged on dashboard for access product menu
    When click button tambah product
    When input form product with data valid
    Then Click button tambah product and showing alert successfully saved

@all @negative @product
Scenario: Add data product harga jual < harga beli
    When input form product with harga invalid
    Then Click button tambah product and showing alert failed

@all @negative @product
Scenario: Delete data product
    When click option menu
    When Choose option delete
    Then click approve pop up delete and should be deleted successfully