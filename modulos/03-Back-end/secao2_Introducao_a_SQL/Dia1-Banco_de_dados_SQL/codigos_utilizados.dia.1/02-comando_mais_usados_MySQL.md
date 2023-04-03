# Comandos mais comuns

Por convenção, utilizamos as palavras chave do `SQL` em caixa alta para diferenciar das indicações de tabelas e colunas, é fundamental utilizar o `; (ponto e vírgula)` ao final de cada comando `SQL`, caso contrário ele não irá funcionar.

- **USE**: O comando USE serve pra definir a referência do banco de dados que será utilizado na query:
  ```SQL
   USE nome_do_banco_de_dados_que_quero_conectar;
  ```
  Saída esperada:
    ```SQL
    Database changed
    ```

- **SHOW TABLES**: Para retornar todas as tabelas inicializadas no server:
	```SQL
	SHOW TABLES;
	```

- **DESCRIBE**: Visualizar estrutura de uma tabela:
  ```SQL
  DESCRIBE nome_da_tabela;
  ```

- **CREATE DATABASE**: Criar um banco de dados:
	```SQL
	CREATE DATABASE nome_do_banco_de_dados;
	```

**Hora do treino!**

Usando comandos, resolva os seguintes desafios:

- Entre no banco de dados mysql.

  - Criar e iniciar um container MySQL:
	```bash
		docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7
	```
  - Acessar o terminal do container-mysql:
	```bash
		docker exec -it container-mysql bash
	```
	- Acessar o mysql dentro do container:
		```bash
			mysql -u root -p
		```
	- entrar no banco de dados:
		```SQL
  		USE mysql;
		```

- Visualize todas as tabelas desse banco.
	```SQL
  SHOW TABLES;
  ```
-	Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.
	```SQL
	DESCRIBE user;
	DESCRIBE plugin;
	DESCRIBE servers;
	DESCRIBE slow_logs;
	DESCRIBE server_cost;
	DESCRIBE slave_master_info;
	DESCRIBE time_zone;
	DESCRIBE tables_priv;
	DESCRIBE func;
	DESCRIBE engine_cost;
	```
-	Crie um novo banco de dados com o seu nome e depois entre nele.
	```SQL
	CREATE DATABASE mdv;
	USE mdv;
	```
