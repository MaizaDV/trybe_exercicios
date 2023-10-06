package com.controle_frota.main;

import com.controle_frota.core.*;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Principal {

  public static void main(String[] args) {
    Carro carro = new Carro("ABC-1234", 2019);
    Caminhao caminhao = new Caminhao("XYZ-9876", 2018);

    carro.abastecer("Posto Shell", "Piripaco", 100.00);
    carro.abastecer("Posto Ipiranga", "Pirilampo", 200.00);
    carro.abastecer("Posto Petrobras", "Piripanco", 150.00);

    caminhao.abastecer(null, "Piripaco", 200.00);
    caminhao.abastecer(null, "Pirilampo", 300.00);
    caminhao.abastecer(null, "Piripanco", 250.00);

    carro.listaAbastecimentos();
    caminhao.listaAbastecimentos();
  }
}

