-- => consultar data atual
SELECT CURRENT_DATE() AS 'Data atual'; -- YYYY-MM-DD

-- => Consultar hora atual completa
SELECT NOW() AS 'hora atual'; -- YYYY-MM-DD HH:MM:SS

-- => Consultar somente o ano atual
SELECT YEAR(CURRENT_DATE()) AS 'somente o ano atual'; -- retorna o ano atual

-- => Consultar somente a hora atual
SELECT HOUR(NOW()) AS 'somente a hora atual'; -- retorna a hora atual


-- => DATEDIFF - Calcular a diferença em dias entre duas datas, o segundo valor é subtraído do primeiro para calcular o resultado.
-- SELECT DATEDIFF('primeiro_valor', 'segundo_valor') AS 'diferença em dias';

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01') AS 'diferença em dias';

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31') AS 'diferença em dias';


-- => TIMEDIFF - Diferença de tempo entre dois horários, o segundo valor é subtraído do primeiro para calcular o resultado.
-- SELECT TIMEDIFF('primeiro_valor', 'segundo_valor') AS 'diferença em dias';

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10') AS 'Diferença de tempo';

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10') AS 'Diferença de tempo';
