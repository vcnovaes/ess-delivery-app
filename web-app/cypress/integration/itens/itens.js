import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let name = "";

Given("eu estou logado como {string}", (user) => {
    localStorage.setItem("user", JSON.stringify({"id":3,"email":"sugmabals@gmail.com","token":"a","tokenExpiration":1681828114072,"cnpj":"1234"}));
});

Given("eu estou na página {string}", (page) => {
    cy.visit('products');
});

Given("o item de nome {string} não foi cadastrado por mim", (item_name) => {

});

Given("eu vejo o item de nome {string}", () => {

})

When("eu crio o item de nome {string}", (item_name) => {
    name = item_name;
    cy.get('[data-cy="add"]').click();
});

When("eu preencho todos os campos obrigatórios corretamente", () => {
    cy.get('[data-cy="name-input"]').type(name)
    cy.get('[data-cy="price-input"]').type('123')
    cy.get('[data-cy="stock-input"]').type('321')
    cy.get('[data-cy="desc-input"]').type('Esse álbum é o quarto álbum de estúdio da cantora pop Ma Bals, lançado em 12 de março de 2022 pela Decca Records e Glassnote Records.')
})

When("eu confirmo a criação do item", () => {
    cy.get('[data-cy="create-button"]').click();
});

Then("eu ainda estou na página {string}", (page_name) => {
    cy.url().should('match', /products/);
});

Then("eu vejo uma mensagem de erro", () => {
    cy.get('[data-cy="error"]').should('be.visible');
});