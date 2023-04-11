/*
Scenario: Create promotion
    Given estou na página "Promotions"
    And I write "10% em CDs" in the field "Nome"
    And eu preencho o campo "Valor"
    And eu preencho "Categória"
    When i click on "Criar"
    Then a new promotion is created
*/

describe("Promotions", () => {
    it("Should add promotion", () => {
        cy.visit('/supplier/promotions')
        cy.get("#f-name").type("10% em Pop")
        cy.get("#f-value").type("10")
        cy.get("#f-category").type("POP")
        cy.get("#f-active").check()
        cy.get("#add-btn").click()
        cy.reload()
    })


})