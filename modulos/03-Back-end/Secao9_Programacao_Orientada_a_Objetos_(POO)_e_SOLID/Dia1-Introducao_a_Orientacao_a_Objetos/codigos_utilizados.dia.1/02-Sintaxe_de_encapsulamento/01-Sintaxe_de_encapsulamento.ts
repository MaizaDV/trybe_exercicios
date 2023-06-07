class Person1 {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

// esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const P1 = new Person1('Maria', 171, 58, 19);
const P2 = new Person1('João', 175, 66, 18);

//*──── sintaxes que são válidas neste contexto ───────────────────────────────────────────
// Alteração direta de variável pública
P1.name = 'Mariah';

// Acesso direto a variável pública
console.log(P1.name);

// Acesso a método público que manipula atributo privado
console.log(P1.getWeight());

// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(P2.age);

// Acesso a método público que manipula atributo privado
P2.birthday();
console.log(P2.age);

// Acesso a método com setter para manipular atributo privado como se fosse público
P2.age = 17;
console.log(P2.age);

// Leitura de atributo readonly
console.log(P1.height);

/*
Saída:
Mariah
58
18
19
17
171
*/

//*──── sintaxes que são inválidas neste contexto ─────────────────────────────────────────
// // Acesso externo à classe a atributo privado
// P2._weight;
// P2._weight = 1;
// // Acesso a atributo inexistente
// P2.weight;
// P2.weight = 1;
// // Escrita em atributo readonly
// P2.height = 1;
