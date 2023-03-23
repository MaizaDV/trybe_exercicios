Criar e iniciar um container MySQL:
```bash
docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7
```

**MySQL na linha de comando**

Acessar o terminal do container-mysql:
```bash
docker exec -it container-mysql bash
```

Acessar o mysql dentro do container:
```bash
mysql -u root -p
```
O usuário root, é o padrão da imagem do MySQL, após acessar o container mysql usar a mesma senha usada na criação do container:  MYSQL_ROOT_PASSWORD=senha-mysql

Ver todos os bancos de dados que estão instalados atualmente, usar ponto e vírgula ao final de comandos no SQL:
```SQL
SHOW DATABASES;
```
Saída esperada:
```SQL
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

```

Para sair do container e terminal usar o comando `exit`.
