Feature: Gerênciamento de Promoções
    As "Administrador"
    I want to ver as promoções cadastradas, podendo adicionar novas, edita-las ou exclui-las
    So that eu possa gerência promoções


Scenario: Create promotion
    Given estou na página Promotions
    When I write the necessary informations fields
    And I click on Criar
    Then a new promotion is created

Scenario: See promotions
    Given estou na página Promotions
    Then I can see the promotions in a table

Scenario: Cadastrar promoção sem dados obrigatórios
    Given estou na página Promotions
    When I write not the necessary informations fields
    And I click on Criar
    Then the promotion should be not created

Scenario: Habilitar promoção
    Given estou na página Promotions
    When eu seleciono a opção de editar uma promoção
    Then a promoção aparece habilitada na tabela da página

Scenario: Excluir promção
    Given estou na página Promotions
    When eu seleciono a opção de editar a promoção "10% em Pop"
    And eu excluo a promoção "10% em Pop"
    Then Eu não devo ver a promoção "10% em Pop"
