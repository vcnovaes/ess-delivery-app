Feature: Login dos Fornecedores
  As a "Fornecedor" usuário do sistema
  I want to realizar o login do sistema como fornecedor
  So that eu possa usar o sistema como fornecedor

  Scenario: Login realizado corretamente
    Given sou um fornecedor cadastrado como
    And estou na página "LoginDeFornecedor"
    When eu preencho o campo "Email" com o valor "bdljasd@gmail.com" 
    And eu preencho o campo "Senha" com o valor "1234"
    And eu seleciono a opção "Login"
    Then eu sou redirecionado para a página "Supplier"

  Scenario: Login com credenciais incorretas
    Given sou um fornecedor cadastrado no sistema
    And estou na página "LoginDeFornecedor"
    When eu preencho o campo "Email" com o valor "rls7"
    And eu preencho o campo "Senha" com o valor "abc123"
    And eu seleciono a opção "Login"
    Then eu recebo uma mensagem de erro de credenciais incorretas
