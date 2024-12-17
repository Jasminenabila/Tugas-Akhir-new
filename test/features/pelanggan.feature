Feature: Pelanggan

@negatif
Scenario: Add pelanggan data empty
    Given Make sure already logged on dashboard
    When click button tambah
    When input form pelanggan data empty
    Then Click button tambah and showing alert failed

@negatif
Scenario: Add pelanggan data invalid format
    Given click button tambah
    When input form pelanggan data invalid format number
    Then Click button tambah and showing alert failed

@positive
Scenario: Add pelanggan successfully
    Given click button tambah
    When input form pelanggan
    Then Click button tambah and showing alert success