class Vehicle {
  constructor(public brand: string, private automaker: string) {}

  public speed():string {
    console.log(`O ${this.brand} Acelera !`);
    return `O ${this.brand} acelera!`;
  }
}

//──── herança ───────────────────────────────────────────────────────────────────────────
class Car extends Vehicle {
  constructor(brand: string, automaker: string) {
    super(brand, automaker);
  }

  public speed(): string {
    console.log(`Acelera o ${this.brand}!`);
    return super.speed() + `Acelera o ${this.brand}`;
  }

}

const carro = new Car('polo', 'vw');
carro.speed();

/* saída
Acelera o polo!
O polo Acelera ! */
