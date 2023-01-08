#### Essa transmissão de informações de um componente filho para um componente se baseia nos seguintes pilares:

- O componente pai detém o Estado e controla completamente como ele será atualizado. Isso significa que as funções que manipularão o estado devem ser declaradas sempre nele mesmo.

- Quando algum componente filho deve passar alguma informação ao componente pai, ele deve receber como props a função que atualiza o estado do pai e dar a essa função, como parâmetro, a informação pedida.

- A informação transmitida dessa forma será inserida no estado do componente pai.
