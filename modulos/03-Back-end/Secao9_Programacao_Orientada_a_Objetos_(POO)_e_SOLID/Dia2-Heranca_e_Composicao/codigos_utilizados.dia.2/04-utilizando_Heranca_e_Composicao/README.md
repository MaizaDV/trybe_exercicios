# Resolvendo um problema proposto utilizando Herança e Composição
Você precisa, de forma eficiente, criar entidades que representem pessoas físicas e pessoas jurídicas, compartilhando alguns elementos em comum, tais como nome e endereço, mas com elementos específicos de cada uma delas, como CPF e CNPJ.

Além disso, você precisa criar uma interface para contratos, que devem possuir cláusulas e devem poder ser assinados por pessoas diversas.

Existem inúmeras formas de se fazer isso e com o conteúdo de hoje você perceberá como é bem mais fácil do que parece.

confira o motivo de usarmos interface e/ou classe (herança):

### Interface Contract:

- Será o nosso contrato, algo que nos guiará em relação às regras de negócio;
- É importante ser utilizada quando sabemos quais atributos e/ou métodos devem ser utilizados e são imprescindíveis para a implementação da nossa classe;
- As interfaces não necessariamente contêm todos os elementos que precisam ser implementados em uma classe. Contudo, elas funcionam como um guia para o cumprimento das regras de negócio. Ainda é possível definir métodos e atributos adicionais, ou ainda criar várias interfaces, cada uma relacionada a regras específicas, e implementá-las em uma mesma classe;
- No exemplo abordado, os atributos subject, clause, signatories e o método describe são importantes para a regra em questão e estão sendo implementados na classe SalesContract. Entretanto, além desses elementos, outros métodos também são implementados. O que nos mostra, que por mais que venhamos a definir um contrato com elementos específicos, ainda temos a flexibilidade de fazer ajustes e implementações.

### Herança - classe Person:

- Permite a reutilização do código, visto que todas as declarações da classe mãe (superclasse), com exceção de elementos privados, são herdadas;
- Aumenta o acoplamento do código, pois alterações na implementação em uma superclasse podem afetar as suas subclasses. Por exemplo, a adição, remoção ou alteração de métodos e propriedades pode provocar bugs caso não sejam planejadas com cautela;
- No exemplo abordado, as classes NaturalPerson e LegalPerson herdam de Person. Observe que ambas as classes filhas mantêm o padrão de receberem parâmetro name e de reutilizar o método getter name. Este é um exemplo reduzido, mas que nos mostra o quanto a herança pode ser útil.
