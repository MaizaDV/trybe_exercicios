FROM node:16

# o expose serve apenas para sinalizar em qual porta rodaremos o container
# a definição da porta se dá no arquivo docker-compose.yaml
EXPOSE 3000

WORKDIR /

# aqui copiamos apenas o package.json e o package-lock.json, pois assim
# garantimos que quando as dependências forem instaladas, suas versões não vão ser alteradas.
COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
