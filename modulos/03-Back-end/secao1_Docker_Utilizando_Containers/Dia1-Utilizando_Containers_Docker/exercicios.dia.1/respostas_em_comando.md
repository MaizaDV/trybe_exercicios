🚀 Exercício 1 ✅
No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

🚀 Exercício 2 ✅
Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso. 


🚀 Exercício 3 ✅
Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.
```bash
docker pull debian:stable-slim
```

🚀 Exercício 4 ✅
Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.
```bash
docker container run -it debian:stable-slim
```

🚀 Exercício 5 ✅
No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.
```bash
root@c55f8dc86449:/# cat /etc/*-release 
```

🚀 Exercício 6 ✅
Encerre o terminal.
```bash
root@c55f8dc86449:/# exit
```

🚀 Exercício 7 ✅
Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.
```bash
docker container ls -a

name: unruffled_visvesvaraya
id: c55f8dc86449
```

🚀 Exercício 8 ✅
Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.
```bash
docker start c55f8dc86449

docker container ls
```

🚀 Exercício 9 ✅
Retome o container que foi criado anteriormente neste exercício.
```bash
docker attach c55f8dc86449
```

🚀 Exercício 10 ✅
Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.
```bash
root@c55f8dc86449:/# cat /etc/debian_version 
```

🚀 Exercício 11
Encerre o terminal.
```bash
exit
```

🚀 Exercício 12
Remova somente o container criado para esse exercício.
```bash
docker container rm c55f8dc86449
```

Exercício 13
[BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.
```bash
docker run -it --rm andrius/ascii-patrol
```

Exercício 14
[BÔNUS] Encerre o container utilizando os botões [ctrl] + [c].
