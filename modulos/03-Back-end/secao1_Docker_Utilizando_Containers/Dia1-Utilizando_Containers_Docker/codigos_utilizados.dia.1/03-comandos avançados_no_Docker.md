# Comandos avançados no Docker
<!-- 
<details>
<summary><strong>Curiosidade</strong></summary>

</details> 
-->

O Docker nos permite executar um comando dentro de um `container que já está em execução`, isso é muito útil, pois nos ajuda a encontrar problemas durante a execução dos nossos projetos.

A seguir, nós vamos utilizar alguns comandos úteis utilizando o programa sh, que nos permite simular um acesso de `terminal` dentro do `container` que já está em execução.

<details>
<summary><strong>Acessando o terminal do container</strong></summary>

### Exemplo passo a passo de acesso ao terminal de um container:

1° - Com esse comando criamos um novo container com a flag `-d` (modo “segundo plano”), atribuímos o nome de `meu-container` com a flag `--name`, solicita a sua remoção após a sua finalização com `--rm` e substitui o comando padrão para um comando customizado com  `sleep 300`.

```bash
  docker container run --rm -d --name meu-container alpine:3.14 sleep 300
```

Para confirmar o sucesso do comando verificamos a lista de containers usando `docker ps`.

```bash
docker ps
```

```bash
# A saída esperada é algo parecido com isso, o STATUS ficará Up e  NAMES terá que ter o nome do container que foi atribuído
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS          PORTS     NAMES
99ee42188fa7   alpine:3.14   "sleep 300"   14 seconds ago   Up 13 seconds             meu-container
```

2° - Executamos o programa sh, que nos permite simular um acesso de terminal dentro do container que já está em execução.

<details>
  <summary>Padrão de comando de acesso ao terminal</summary>

Vamos utilizar o comando `docker exec -it <nome-do-container> <comando-a-ser-executado>`, testando o acesso ao terminal:

```bash
docker exec -it <nome-do-container> <comando-a-ser-executado>
```

Com a flag `-t`, solicitamos a criação de uma sessão de terminal;

A flag `-i`, é necessária para que a sessão seja interativa;

O comando a ser executado será `sh`, que é um programa de terminal `linux`.

</details>

### Comando de acesso ao terminal:

```bash
 docker exec -it meu-container sh
```

```bash
# Saída esperada do comando acima, estamos acessando o terminal do container
/ # 
```

<details>
<summary><strong>Já dentro do container, executamos um comando `ps aux`</strong></summary>

- Este comando lista todos os processos em execução no momento;

```bash
# Estamos dentro do terminal do container, a saída a baixo, em sequência, é o comando ps aux no terminal e o resultado desse comando.
/ # ps aux
PID   USER     TIME  COMMAND
    1 root      0:00 sleep 300
    7 root      0:00 sh
   13 root      0:00 ps aux 
```

Dentro do container, os únicos processos em execução são:

- sleep 300, que especificamos na inicialização do container;
- sh, que especificamos na hora de abrir a sessão interativa;
- ps aux, que acabamos de executar para obter esta lista;

```bash
# Ao final usamos o comando exit para sair do terminal do container, abaixo a saída esperada dos comandos usados aqui em sequência
pessoa@trybe:~/course$ docker exec -it meu-container sh
/ # ps aux
PID   USER     TIME  COMMAND
    1 root      0:00 sleep 300
   14 root      0:00 sh
   20 root      0:00 ps aux
/ # exit
```

</details>

3° - Forçamos a parada de execução do container usando o comando docker stop;

```bash
  docker stop -t 0 meu-container
```

E depois validamos que não há nenhum container restante na máquina usando `docker ps -a`.

Saída esperada dos comandos feitos em sequência:

```bash
pessoa@trybe:~/course$ docker stop -t 0 meu-container
meu-container
pessoa@trybe:~/course$ docker ps -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS          PORTS     NAMES
```

</details>

<details><summary><strong>Ver os logs de um container em execução</strong></summary>

Quando executamos um novo container no modo detached(em segundo plano), nós deixamos de ver as informações (logs, erros, etc) que o programa está executando.

O Docker oferece um comando para que a gente possa ver essas informações sem precisar se conectar diretamente ao terminal do container.

Comando padrão para ver logs em segundo plano:

```bash
docker logs <flags?> <nome-do-container>
```

</details>

<details><summary><strong>Monitorando os processos dentro de um container</strong></summary>

O comando `docker top`, assim como nos terminais Linux, traz as informações sobre os processos que estão sendo rodados dentro do container, o que não inclui, por exemplo, serviços que são compartilhados com o sistema hospedeiro.

Comando padrão que traz as informações sobre os processos que estão sendo rodados dentro do container em segundo plano:

```bash
docker top <nome-do-container>
```

```bash

person@trybe:~$ docker container run -d --rm --name meu-container alpine:3.14 sleep 300
6942640dda0e7d5e3db3fb122ab2e6c77f0d4bcf75b8c1082143cedf8215a193

person@trybe:~$ docker top meu-container
# Saída esperada do comando docker top <nome-do-container>
UID      PID     PPID     C     STIME     TTY   TIME       CMD
root     5299    5278     0     09:35     ?     00:00:00   sleep 300


person@trybe:~$ docker stop -t 0 meu-container
meu-container
```

</details>

<details><summary><strong>Limpando containers que não estão sendo utilizados</strong></summary>

O comando `docker container prune` remove todos os containers inativos do seu computador. Além disso, ele pede uma confirmação para executar a operação e no final mostra a quantidade de espaço em disco recuperado.

⚠️ Atenção: `docker container prune` remove todos os containers inativos do seu computador.

Comando padrão para remover todos os containers inativos do seu computador:

```bash
docker container prune
```

exemplo de saída do comando:

```bash
person@trybe:~/course$ docker container prune

WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Deleted Containers:
ed2aa643a36af0d3805812a6114e6da1a339f8059e373246270f0446c20f2f7f
[várias linhas]
108085a4660a7e69d1625503f0b078ecc94155edf4b2023796eadad35f1e65f6

Total reclaimed space: 442B

person@trybe:~/course$
```

</details>
