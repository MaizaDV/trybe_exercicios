# Exercícios - agora, a prática
Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, a missão agora é tentar finalizar os exercícios a seguir!

**Exercício 1**: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.

R: Ir na barra lateral esquerda, no Schemas, selecionar o sakila, selecionar tables e clicar com o botão direito em cima da tabela selecionada e clicar em Select Rows. 

**Exercício 2**: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

R: Ir na barra lateral esquerda, no Schemas, selecionar o sakila, selecionar tables com o botão direito e em seguida clicar em Create Table.

**Exercício 3**: Feito isso, crie uma tabela com as seguintes restrições:

**Nome da tabela:** filme

**Colunas:**

**filme_id** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;

**descricao** - não permite nulos, tipo texto (varchar(100));

**ano_lancamento** - não permite nulos, tipo int;

**nota** - permite nulos, tipo int;

R: 
Após clicar em Create Table:

Preencher o nome da tabela com filme;

Adicionar os campos solicitados;

Clicar em Apply.

**Exercício 4**: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

R: Ela faz referência à tabela country.

**Exercício 5**: Após resolver o **exercício anterior**, responda: qual tipo de relacionamento a tabela city faz com a tabela country?

R: Muitos para um (N:1).

**Exercício 6**: Qual tipo de relacionamento a tabela country faz com a tabela city?

R: Um para muitos (1:N).

**Exercício 7**: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

R:

store -> staff

country -> city

film -> language
