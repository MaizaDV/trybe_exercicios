### Parte III - Processos & Jobs
1. Liste todos os processos;
2. Agora use o comando sleep 30 & ;
3. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);
4. Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;
5. Crie um processo em background que rode o comando sleep por 300 segundos.
6. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
    Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.
7. Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
    Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.
8. Retome a execução do processo sleep 100 em background com o comando bg.
9. Termine a execução de todos os processos sleep (mate os processos).
