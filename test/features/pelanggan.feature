Feature: Pelanggan

@all @positive
Scenario: Add pelanggan successfully
    Given Make sure already logged on dashboard
    When click button tambah
    When input form pelanggan
    Then Click button tambah and showing alert success