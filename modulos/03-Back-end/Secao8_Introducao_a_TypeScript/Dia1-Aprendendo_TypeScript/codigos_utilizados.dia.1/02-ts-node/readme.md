# ts-node
Uma opção para otimizar esse processo é usar o [ts-node](https://www.npmjs.com/package/ts-node), que, em linhas gerais, vai compilar seu código `TypeScript` em `JavaScript` e executá-lo usando o `Node` com um único comando.

Outra vantagem desse executável é que ele faz esse processo sem gerar um arquivo `.js` para cada arquivo `.ts` de sua aplicação.

Também, é possível instalar o compilador `ts-node` globalmente, mas é recomendável instalá-lo localmente em cada projeto, já com a versão adequada, para evitar possíveis conflitos de versão.

```bash
npm i --save-dev ts-node
```
