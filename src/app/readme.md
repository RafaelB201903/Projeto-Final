Pesquisa de petshop


Localizar petshop: 

-Listar;        ok
-enviando id;   ok
-Listar info ver-mais-petshop;  ok (13/01/2021) (RAFAEL)
-Implementar o pedido;          parcialmente (13/01/2021)
*enviar o id do pet (para obter as informações no petshop)


(Menos do ver-mais para o agendar que ainda está dando erro)

------------------------------------------------

Gerenciar Pet: 

-Cadastrar;                             ok
-Listar;                                ok
-Alterar;                               ok
-Exclusão;                              ok 06/01/2021
-Visualizar;                            ok
-enviando id atualizar;                 ok
-enviando id vacina;                    ok
-Arrumar o do vacina e do info-pet;     ok
-Arrumar o erro do tabs do atualizar;   ok
-Listar o pet atraves do id do cliente; ok 08/01/2021

(Ainda preciso Vincular o pet ao cliente, ou seja só aquele cliente poderá visualizar aquele seu pet.)

Preciso concertar o tabs

-OBS: Preciso conseguir enviar o id para outra 
página no caso a alterar.

------------------------------------------------

Vacinas:

-Cadastrar;     ok
-Listar;        ok
-Alterar;       ok
-Excluir;       ok
-enviando id;   ok
-Listar vacinas através do id do pet; ok 08/01/2021
-Consertar o retorno dps de alterar;  ok 08/01/2021
-Consertar o retorno dps de excluir;  ok 08/01/2021

CONSERTAR OS ERROS DOS SERVIÇOS DE EXCLUIR, ALTERAR E ADICIONAR.

-OBS: Preciso fazer com que as vacinas se 
conectem com o pet especifico.

            21/12/2020
-OBS²: Cadastrei a vacina com o id do pet, agora é só
listar as vacinas referente aquele id.

-----------------------------------------------

Perfil:

-Listar informações do usuário;     parcialmente
-Inserir imagem do usuário;         ok Julia (09/01/2021)
-Implementar o esqueci minha senha; X

------------------------------------------------

Menu:

-Melhorar o design do menu;


------------------------------------------------

Método event para facilitar a busca.

categoria por estado ou bairro. OLX referencia.

were podemos fazer com o searchbar.

firebase.google.com/docs/firestore/query-data/queries.


-------------------------------------------------------------------------------------------------------------------
Alterações:


-Melhorar o search bar, tanto no design e tanto na hora de buscar;

-Implementar um metodo para buscar por Estado e Bairro;


---------------------------------------------------------------------------------------------------------------------
08/01/2021 - 10:50

NOTA: Estou tentando fazer com que as páginas perfil e ver-mais-petshop puxem do banco de dados (firebase) as 
informações, porém estou tendo dificuldades para puxar as informações através do doc (id).




-------------------------------------------------------------------------------------------------
 15/01/2021 --- Relatorio 

agendar-pedido:
-Possibilidade de escolher o pet e o serviço na hora de agendar;    ok

ver-mais-petshop:
-botão agendar com problema para ir para a página de agendar;   ok

pedidos:
-Fazer enviar o id para a página ver-mais-pedidos;      ok 


-------------------------------------PETSHOP APP------------------------------------

pedidos-novos:
-Colocar as informações do dono e do pet no listar;     X
-Listar no petshop os pedidos através do id do petshop e do status; X

Confirmar-pedido:
-Finalizar a alteração do pedido;                       X

ver-mais-pedido-novo:
- o erro do botão "confirmar";                 X



Relatorio 29/01/2021 ---------------------------------------------

Cliente 

PEDIDO
-listar informações do cliente; ok 29/01/2021 RAFAEL
-colocar informações na tela; 30/01/2021 RAFAEL
-enviar o id para o ver-mais-pedidos; ok 29/01/2021 RAFAEL
-ajeitar o layout do card; ok 29/01/2021 RAFAEL
-COLOCAR PARA PEGAR O NOME DO PET AO FAZER O PEDIDO; 

VER-MAIS-PETSHOP
-Listar as informações do pet; ok 30/01/2021 RAFAEL
-Listar as informações do pedido; parcialmente (falta puxar o valor) ok 30/01/2021 RAFAEL
-Listar as informações do petshop ; ok 30/01/2021 RAFAEL


VER-MAIS-PEDIDO
-enviar id na url; ok 29/01/2021 RAFAEL
-listar as informações; 

PERFIL
-ajeitar o nome no perfil; ok 29/01/2021 RAFAEL
-trocar o texto alterar logo para alterar foto; ok 29/01/2021 RAFAEL
-tirar o backbutton; ok 29/01/2021 RAFAEL

DICAS PET
-colocar as imagens de volta; ok 04/02/2021 

ADD INFO PET
-colocar o input de data de nascimento como: type:date;  ok 29/01/2021 RAFAEL

ALT INFO PET
-colocar o input de data de nascimento como: type:date; ok 29/01/2021 RAFAEL

INFO VACINAS (alt-info-vacina)
-consertar bug que exclui a vacina; IMPORTANTE
//o bug está por conta que n está sendo enviado o id, e n consegui resolver

LOCALIZAR PETSHOP
-(Ajeitar o search bar) ok 29/01/2021 RAFAEL
-colocar ion-button-menu; ok 31/01/2021 RAFAEL

AGENDAR-PEDIDO
-Colocar o nome do petshop e o endereço; ok 29/01/2021 RAFAEL
-Tirar o input de serviço que está escrito 60 e colocar o referente ao serviço; ok 29/01/2021 RAFAEL
-verificar o bug das duas setinhas no pet;  IMPORTANTE
-ao finalizar o pedido retornar para a pagina localizar petshop; ok 29/01/2021 RAFAEL

VER-MAIS-PETSHOP
-Consertar a listagem do cnpj; ok 29/01/2021 RAFAEL
-consertar o botão de agendar ; ok 30/01/2021 RAFAEL

2° relatorio 10/02/2021 ----------------------------------------------

TODAS AS PAGINAS 
-Verificar se dar pra colocar as 3 barrinhas do menus nas paginas que n 
possuem; 


3° relatorio 17/02/2021 --------------------------------------------------------------

TODAS AS PAGINAS 
-Verificar se dar pra colocar as 3 barrinhas do menus nas paginas que n 
possuem;  ok 17/02/2021 RAFAEL

-Inserir uma mensagem para cada finalização de ação (agendar, adicionar pet, etc);
*agendar-pedido; ok
*add-info-pet; ok
*alt-info-pet; ok
*del-pet; ok
*add-info-vacina; ok
*alt-info-vacina; ok
*del-info-vacina; ok
*atualizar-info; ok


PEDIDOS 

-Ajustar o q irá colocar onde seria o nome;  ok

INFO-VACINAS

-Colocar as informações dos inputs centralizadas; ok 
-Desativar o input de informação; ok 

ALT-INFO-PET

-Fazer retornar para pagina info-pet ao finalizar a alteração; ok 17/02/2021 RAFAEL

PERFIL

-Listar a quantidade de pets cadastrados e de pedidos;

ATUALIZAR INFO

-Campo 'complemento' não puxando a informação do banco; ok 17/02/2021 RAFAEL


CADASTRAR-CLIENTE

-Colocar a janelinha de confirmação; ok 18/02/2021

-Enviar o cliente para a pagina de login ao finalizar cadastro; ok 18/02/2021