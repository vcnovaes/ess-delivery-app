Feature: Login dos Fornecedores
  As a "Fornecedor" usuário do sistema
  I want to realizar o login do sistema como fornecedor
  So that eu possa usar o sistema como fornecedor

  Scenario: Login realizado corretamente
    Given sou um fornecedor cadastrado no sistema
    And estou na página "LoginDeFornecedor"
    When eu preencho o campo "Usuário" com o valor "rls7" 
    And eu preencho o campo "Senha" com o valor "Abc.123@"
    And eu seleciono a opção "Login"
    Then eu sou redirecionado para a página "SuaConta"

  Scenario: Login com credenciais incorretas
    Given sou um fornecedor cadastrado no sistema
    And estou na página "LoginDeFornecedor"
    When eu preencho o campo "Usuário" com o valor "rls7"
    And eu preencho o campo "Senha" com o valor "abc123"
    And eu seleciono a opção "Login"
    Then eu recebo uma mensagem de erro de credenciais incorretas
