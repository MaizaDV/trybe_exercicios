let pecaXadrez = "";
    switch (pecaXadrez.toLowerCase()) {
        case "peão": 
            console.log("Peão => Se for o primeiro lance avançe uma ou duas casas, senão, apenas um movimento pr vez.");
            break;
        case "bispo": 
            console.log("Bispo => pode mover na diagonal quantas casas quiser, desde que não seja bloqueado por suas próprias peças ou por uma peça inimiga");
            break;
        case "cavalo": 
            console.log("Cavalo => Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, o cavalo se move em L");
            break;
        case "torre": 
            console.log("Torre => Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical), desde que não seja bloqueada por outras peças.");
            break;
        case "dama": 
            console.log("Pode mover quantas casas quiser na horizontal e na vertical (como a torre). A dama também pode mover quantas casas quiser na diagonal (como o bispo). ");
            break;
        case "rei": 
            console.log("Rei => só pode se mover uma casa em qualquer direção");
            break;
        default:
            console.log("Peça não encontrada!");
            break;
    }