### event handlers genéricos

- Uma excelente forma de criarmos formulários 100% com componentes controlados é fazermos um event handler genérico, capaz de atualizar o estado de todos os componentes com a mesma lógica.

#### Tenha atenção ao passo a passo de como fazermos um event handler genérico:

- Dê a cada elemento um nome que seja igual à respectiva chave no estado do componente;

- No handler, recupere a partir do parâmetro event o nome do componente que disparou o evento e o valor associado ao disparo;

- Interpole o nome do componente como chave do estado, assim como na sintaxe acima.
