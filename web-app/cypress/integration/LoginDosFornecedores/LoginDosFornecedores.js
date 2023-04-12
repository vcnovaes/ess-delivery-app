import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("sou um fornecedor cadastrado como {string}", (user) => {
    localStorage.setItem("user", JSON.stringify({"id":3,"email":"sugmabals@gmail.com","token":"a","tokenExpiration":1681828114072,"cnpj":"1234"}))
});

Given("estou na página {string}", (page) => {
    cy.visit('/supplier/login')
});

When("eu preencho o campo {string} com o valor {string}", ("Email",email) => {
    cy.get('#email').type('bdljasd@gmail.com')
});

When("eu preencho o campo {string} com o valor {string}", ("Senha",password) =>{
    cy.get('#password').type('1234')
});

When("eu seleciono a opção 'Login'" => {
    cy.get('#login').click()
});

Then("eu sou redirecionado para a página 'Supplier'");