/*
Feature: Gerênciamento de Promoções
    As "Administrador"
    I want to ver as promoções cadastradas, podendo adicionar novas, edita-las ou exclui-las
    So that eu possa gerência promoções



Scenario: Habilitar promoção
    Given estou na página "Promoções"
    When eu seleciono a opção de editar a promoção "Desconto 5%"
    And eu vejo as informações de promoção "Desconto 5%"
    And eu seleciono a opção de "Ativar"
    And eu seleciono "Salvar"
    Then a promoção aparece habilitada na tabela da página "Promoções"

Scenario: Excluir promção
    Given estou na página "Promoções"
    And existe apenas 1 promoção cadastrada 
    And eu vejo a promoção "Desconto 5%"
    And eu vejo a promoção "Desconto 10%"
    When eu seleciono a opção ">" a promoção "Desconto 10%"
    And eu vejoas informações da promoção "Desconto 10$"
    And eu seleciono a opção de excluir 
    Then a tabela na página "Promoções" aparece apenas "Desconto 10%"

Scenario: Alterar dados da promoção
    Given estou na página "Promoções"
    And existem promoções cadastradas
    And eu vejo a pormoção "Desconto de 5%"
    When eu seleciono a opção de editar a promoção "Desconto de 5%"
    And eu vejo as informações da promoção "Desconto de 5%"
    And eu altero "Data Final" para "20/01/23"
    And eu seleciono "Salvar"
    Then estou na página "Promoções"
    And vejo a promoção "Desconto 5%" atualizada
*/
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


/*
Scenario: Create promotion
    Given estou na página Promotions
    And I write the necessary informations fields
    When i click on Criar
    Then a new promotion is created
*/

Given("estou na página Promotions", () => {
    cy.visit("/supplier/promotions")
})


When("I write the necessary informations fields", () => {
    // BEFORE RUN CHECK IF THE CATEGORY EXISTS
    cy.get("#f-name").type("10% em Pop")
    cy.get("#f-value").type("10")
    cy.get("#f-category").type("Pop")
    cy.get("#f-active").check()
})

When("I write not the necessary informations fields", () => {
    // BEFORE RUN CHECK IF THE CATEGORY EXISTS
    cy.get("#f-name").type("5% em Pop")
    cy.get("#f-active").check()
})


When("I click on Criar", () => {
    cy.get("#add-btn").click()
})

Then("the promotion should be not created", () => {
    cy.reload()
    // Find the table with id "promo-table"
    cy.get('#promo-table')
        // Find the cell containing the text "10% em Pop"
        .contains('td', '5% em Pop').should('not.exist')
    // Assert that the cell exists
})


Then("a new promotion is created", () => {
    cy.reload()
    // Find the table with id "promo-table"
    cy.get('#promo-table')
        // Find the cell containing the text "10% em Pop"
        .contains('td', '10% em Pop')
        // Assert that the cell exists
        .should('exist');
})


Then("I can see the promotions in a table", () => {
    cy.reload()
    cy.get('#promo-table')
        // Find the cell containing the text "10% em Pop"
        .contains('td', '10% em Pop')
        // Assert that the cell exists
        .should('exist');

})
When("eu seleciono a opção de editar a promoção {string}", (promoName) => {
    cy.get('#promo-table')
        .contains('tr', '10% em Pop') // find the table row with the text '10% em Pop'
        .within(() => {
            cy.get('#edit-btn').click(); // find the button with id "active" inside the table row and click it
        });
})

When("eu seleciono a opção de editar uma promoção", () => {
    cy.get('#promo-table')
        .contains('tr', '10% em Pop') // find the table row with the text '10% em Pop'
        .within(() => {
            cy.get('#edit-btn').click(); // find the button with id "active" inside the table row and click it
        });
    cy.get('#promo-table')
        .contains('tr', '10% em Pop') // find the table row with the text '10% em Pop'
        .within(() => {
            cy.get('#active').click(); // find the button with id "active" inside the table row and click it
        });

    cy.get('#promo-table')
        .contains('tr', '10% em Pop') // find the table row with the text '10% em Pop'
        .within(() => {
            cy.get('#save-btn').click(); // find the button with id "active" inside the table row and click it
        });
})

When("eu salvo a edição da promoção", () => {
    cy.get('#promo-table')
        .contains('tr', '10% em Pop') // find the table row with the text '10% em Pop'
        .within(() => {
            cy.get('#save-btn').click(); // find the button with id "active" inside the table row and click it
        });
})

When("eu excluo a promoção {string}", (promoName) => {
    cy.get('#promo-table')
        .contains('tr', promoName) // find the table row with the text '10% em Pop'
        .within(() => {
            cy.get('#delete-btn').click(); // find the button with id "active" inside the table row and click it
        });
})

When("Eu clico ativar promoção", () => {
    cy.get('#promo-table')
        .contains('tr', '10% em Pop') // find the table row with the text '10% em Pop'
        .within(() => {
            cy.get('#save-btn').click(); // find the button with id "active" inside the table row and click it
        });
})

Then("Eu não devo ver a promoção {string}", (promoName) => {
    cy.get('#promo-table')
        .contains('tr', promoName).should("not.exist")
})


Then("a promoção aparece habilitada na tabela da página", () => {
    cy.get('#promo-table')
        .contains('tr', 'Yes').should("exist") // find the table row with the text '10% em Pop'
})


