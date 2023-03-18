#!/bin/bash

# Comandos usados no linux Mint Vanessa, comandos feitos na main ~ 

# 1. Desinstalei versões anteriores.
# Caso nenhum dos pacotes esteja instalado, esse comando retornará o erro E: Impossível encontrar o <nome-do-pacote>. Nesse caso, é só prosseguir com a instalação.
sudo apt-get remove docker* containerd runc

wait
# 2. Instalei as dependências iniciais
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

wait
# 3. Adicionei a chave pública do repositório Docker em minha máquina
# Se tudo der certo, você não deve receber nenhum retorno visual.
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

wait
# 4. Adicionando o repositório remoto na lista do apt
 sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(. /etc/os-release; echo "$UBUNTU_CODENAME") stable"

wait
# 5. Instalando o Docker no Linux
#  Em seguida iremos atualizar a lista de pacotes:
 sudo apt-get update

 wait
#  Por fim, instalaremos o docker e o docker-compose:
 sudo apt-get -y install docker-ce docker-compose

 wait
 sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common

wait
# 6. Adicionando seu usuário ao grupo de usuários Docker
# Primeiro crie um grupo chamado docker:
sudo groupadd docker

wait
# Então, use o comando abaixo para adicionar seu usuário a este novo grupo:
sudo usermod -aG docker $USER

wait
# Então, use o comando abaixo para adicionar seu usuário a este novo grupo:
newgrp docker

wait
# 7. Inicie o Daemon do Docker
# Para consultar o status atual do daemon do Docker, execute o seguinte comando:
sudo systemctl status docker

# O comando anterior deve retornar algo como um pequeno relatório sobre o serviço, onde consta seu status de funcionamento:

# ● docker.service - Docker Application Container Engine
#      Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
#      Active: inactive (dead) since Thu 2021-09-23 11:55:11 -03; 2s ago
# TriggeredBy: ● docker.socket
#        Docs: https://docs.docker.com
#     Process: 2034 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock (code=exited, status=0>
#    Main PID: 2034 (code=exited, status=0/SUCCESS

# Caso o parâmetro Active esteja como stop/waiting ou no nosso caso, como inactive, rode o comando start para iniciá-lo:
sudo systemctl start docker

wait
# Ao consultar o status novamente, o processo deverá estar como start/running/active.

# Agora, vamos habilitar o daemon do Docker para iniciar durante o boot:
sudo systemctl enable docker

wait
# 8. Valide a instalação
# Para validar se tudo ocorreu como deveria na instalação, vamos executar o tão esperado hello world do Docker:
docker run hello-world
