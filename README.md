# trenstatus

## PRIMEIRAMENTE... ##

- Baixar este repositório. - através de git clone abaixo do diretório desejado ou baixando de forma gráfica (nunca fiz isso)
```
cd [diretório-pai do trenstatus]
git clone git@github.com:giuliana-marquesi/trenstatus.git
```
- Preparar o ambiente. É necessário:
  * node (pode ser o 6 stable ou 7,meio arriscado mas é o que tem no docker e tá rodando)
  * npm
  * git
  * cordova(6.5.0) **- para usar o diretório cordova**
  * SDK-Android (android-25;7.1.1) **-para usar o diretório cordova**

- Seguir os README's correspondentes a cada diretório

> Como alternativa a instalar em seu ambiente host todas as dependencias pode-se utilizar o docker, como será instruído a seguir na seção **Usando Docker com cordova**.


## USANDO DOCKER COM CORDOVA ##

### Primeiro é necessário instalar o docker ###

> Segui as seguintes instruções do site [Docker](https://store.docker.com/search?offering=community&type=edition):

No caso foram instruções para Ubuntu (a versão testada 16.04)

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \ "deb [arch=amd64] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) \ stable"

sudo apt-get update

sudo apt-get install docker-ce
```

E para testar se tudo correu bem:

```
sudo docker run hello-world
```

### Depois é necessário baixar uma imagem docker ###

Foi escolhida uma imagem no Docker Hub que já continha o cordova.

Esta imagem pode ser vista [aqui](https://store.docker.com/community/images/beevelop/cordova)

Para baixá-la, usei o código:

```
docker pull beevelop/cordova:latest
```

> **OBS: A IMAGEM FICOU COM 38 GIGAS **

### Fazendo run da imgem ###

Após alguns testes cheguei no seguinte run:

```
sudo docker run --name cordova --privileged -v /dev/bus/usb:/dev/bus/usb -p 5050:5050 -p 8000:8000 -d -v [CAMINHO DE ONDE ESTA A PASTA trenstatus]/trenstatus:/opt/trenstatus/ -t beevelop/cordova
```
- `--name cordova`: é o nome do container
- `--privileged`: é o que dá permissão para executar e acessar as portas usb
- `-v /dev/bus/usb:/dev/bus/usb`: monta a "porta usb" ouvindo a do host
- `-d`: é para deamonizar o docker, segui isso de um outro docker feito por um colega, mas não sei qual é a real função dele aqui
- `-v ~/helo:/opt/hello`: monta o volume hello ouvindo o diretorio helo
- `-t`: faz a run em modo terminal (não sei se é realmente necessario, poderia ser -d)
- `-p 5050:5050`: espelha a porta 5050 para o host, o mesmo ocorre com o 8000

### Executando o container ###

Note que após fazer o **run** o container já está rodando

```
sudo docker ps
```
Para executar:
```
sudo docker exec -it cordova bash
```

Caso o container não estiver rodando é preciso dar start
```
sudo docker start cordova
```

### Notas ###

- O container docker deve ser apenas para rodar os comandos cordova e npm, todas as modificações devem ser feitas no host
- O arquivo config.xml no diretório trenstatus/cordova/www pode precisar alterar a permissão, pois está somente leitura. No linux:

```
cd [diretorio-pai]/tresnstatus/cordova/www
sudo chmod 775 config.xml
```
