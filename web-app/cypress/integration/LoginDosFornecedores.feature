Feature: Login dos Fornecedores
  As a "Fornecedor" usuário do sistema
  I want to realizar o login do sistema como fornecedor
  So that eu possa usar o sistema como fornecedor

  Scenario: Login realizado corretamente
    Given estou na página "LoginDeFornecedor"
    When eu preencho o campo Email com o valor "bdljasd@gmail.com" 
    And eu preencho o campo Senha com o valor "1234"
    And eu seleciono a opção Login
    Then eu sou redirecionado para a página Supplier

  Scenario: Login com credenciais incorretas
    Given estou na página "LoginDeFornecedor"
    When eu preencho o campo Email com o valor "rebecca@gmail.com"
    And eu preencho o campo Senha com o valor "1234abc"
    And eu seleciono a opção Login
    Then eu continuo na página de Login
