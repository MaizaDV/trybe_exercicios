package com.controle_frota.core;

public class Caminhao extends Veiculo {

  public Caminhao(String placa, int anoFabricacao) {
    super(placa, anoFabricacao);
    this.setCombustivel("Diesel");
  }

  @Override
  public void abastecer(String local, String motorista, double valor) {
    this.abastecimentos.add(
        String.format("Local: %s | Motorista: %s | Valor: %.2f", local, motorista, valor));
  }


}
