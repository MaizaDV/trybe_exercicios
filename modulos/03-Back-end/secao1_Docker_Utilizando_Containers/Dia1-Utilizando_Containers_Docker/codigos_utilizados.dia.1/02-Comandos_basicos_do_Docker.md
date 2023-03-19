# Comandos básicos do Docker

## Alguns pontos importantes antes de começar

Formato padrão para comandos não-abreviados no CLI: ` docker <comando> <subcomando> <parâmetros> `;

 Utilize o parâmetro `--help` no `<comando>` ou `<subcomando>` para ter a relação completa do que pode ser executado a partir deles;

 Exemplo: `docker container --help` ou `docker container run --help`.
 Os `<parâmetros>` são opcionais na execução dos comandos;

 O conteúdo faz referência à [documentação](https://docs.docker.com/engine/reference/commandline/docker/) oficial do Docker.

<details>
<summary><strong>Listando imagens</strong></summary>

➡️ Utilize o comando `docker images` para visualizar todas as imagens Docker que já estão presentes em sua máquina.

  ```bash
 docker images
  ```

OBS: Ao tentar executar um container com uma imagem específica e esta imagem não estiver presente na máquina, o `Docker` por padrão tentará obter a `imagem Docker` através do seu `Registry`, o `Docker Hub`.

</details>

<details>
<summary><strong>Listando containers</strong></summary>

➡️ Utilize o comando `docker ps` ou o comando mais novo, o `docker container ls`, para listar todos os containers em execução neste momento em sua máquina.

  ```bash
 docker ps
  ```

  ```bash
 docker container ls
  ```

OBS: Por padrão, o comando `docker ps` não exibe containers que foram parados ou que terminaram sua execução. Para visualizar todos os containers atuais, incluindo os que estão em execução e também parados, é necessário utilizar a `flag -a`.

  ```bash
 docker ps -a
  ```

</details>

<details>
<summary><strong>Executando um novo container</strong></summary>

➡️ Utilize o comando `docker container run <flags>? <imagem>:<tag> <argumentos>?` para executar um container utilizando a imagem identificada pelo `<imagem>:<tag>`.

Os parâmetros `<flags>?` e `<argumentos>?` são opcionais (o que é sinalizado pelo uso de `?`)

O exemplo abaixo executa um container usando a imagem Docker `alpine` e a tag `3.14`:

Comando:

  ```bash
   docker container run alpine:3.14 echo "Hello World"
  ```

  ```bash
pessoa@trybe:~/course$ docker container run alpine:3.14 echo "Hello World"

Unable to find image 'alpine:3.14' locally
3.14: Pulling from library/alpine
8663204ce13b: Pull complete
Digest: sha256:06b5d462c92fc39303e6363c65e074559f8d6b1363250027ed5053557e3398c5
Status: Downloaded newer image for alpine:3.14
Hello World!

pessoa@trybe:~/course$ docker ps -a
CONTAINER ID   IMAGE         COMMAND                 CREATED          STATUS                      PORTS     NAMES
52712fa829f0   alpine:3.14   "echo 'Hello World'"   19 seconds ago   Exited (0) 19 seconds ago             xenodochial_kapitsa
  ```

</details>

<details>
<summary><strong>⚠️ Atenção: Docker atribui um nome aleatório para o nosso container.</strong></summary>

 O Docker segue a seguinte regra para dar um nome a um novo container: `<adjetivo>_<nome>`.

Entretanto, podemos utilizar a flag `--name <nome-da-sua-escolha>` para dar um nome específico ao container criado, em vez de obter um nome aleatório dado pelo Docker.

Exemplo: abaixo utilizamos a flag para dar o nome meu-container para o novo container que desejamos executar:

```bash
docker container run --name meu-container alpine:3.14 echo "Hello World 2"
```

OBS: se existir um container anterior com um nome diferente, o container não será removido, mesmo que sua execução já tenha sido encerrada. Este é o comportamento padrão do Docker, pois ao terminar a execução, o container ainda permanece disponível para ser executado novamente.

</details>

<details>
<summary><strong>Removendo containers</strong></summary>

Você pode remover containers usando o comando `docker rm <nome-do-container>`.

Exemplo:

```bash
docker rm meu-container
```

⚠️  um container só pode ser removido com o comando `docker rm <nome-do-container>` se ele estiver parado ou tiver sua execução terminada.

</details>

<details>
<summary><strong>Modo “auto-remover”</strong></summary>

📝 Este modo é útil para testar várias imagens Docker sem ficar com uma lista de containers parados.

A flag `--rm` indica para o Docker que desejamos que um container seja removido ao final da sua execução.

Exemplo do uso da flag:

```bash
docker container run --rm alpine:3.14 echo "Hello World 3"
```

O container foi criado pelo comando `docker container run` executado, terminou sua execução e o Docker já fez a remoção deste container automaticamente por conta do `--rm`.

⚠️Importante: a flag `--rm` vai remover apenas o container! A `imagem alpine:3.14` ainda estará presente na máquina. Podemos confirmar isso executando o comando `docker images`

Saída de cada comando em sequência:

```bash
pessoa@trybe:~/course$ docker container run --rm alpine:3.14 echo "Hello World 3"

Hello World 3!
```

```bash
pessoa@trybe:~/course$ docker ps -a

CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

```bash
pessoa@trybe:~/course$ docker images

REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
alpine       3.14      e04c818066af   2 weeks ago    5.59MB
```

</details>

<details>
<summary><strong>Modo “segundo plano”</strong></summary>

A flag `-d` ou `--detach`, que é colocada logo apos o `docker container run <flags>? --detach  <imagem>:<tag> <argumentos>?`, faz com que a execução do container ocorra em segundo plano, ou seja, embora não esteja visível, o container executará de forma assíncrona.

⚠️ Esta opção é interessante quando o programa a ser executado é um servidor ou algum processo que você sabe previamente que terá uma execução demorada.
exemplo de comando:

```bash
docker container run --rm -d alpine:3.14 sleep 300
```

Para forçar a parada de um container em execução, podemos usar o comando `docker stop <nome-do-container>`.

Esse comando força o container a terminar a execução atual.

<details>
<summary><strong>Curiosidade</strong></summary>

O comando `docker stop` envia um pedido educado (chamado internamente de `SIGTERM`) ao container para que ele tenha tempo de encerrar tudo o que precisa antes de parar sua execução de fato.

Entretanto, o comando sleep do exemplo ignora esse pedido educado do Docker. Para que o pedido seja forçado (chamado internamente de `SIGKILL`), utilizamos a flag `-t 0`.

Exemplo de comando:

```bash
   docker stop -t 0 <nome-do-container>
```

</details>

</details>
