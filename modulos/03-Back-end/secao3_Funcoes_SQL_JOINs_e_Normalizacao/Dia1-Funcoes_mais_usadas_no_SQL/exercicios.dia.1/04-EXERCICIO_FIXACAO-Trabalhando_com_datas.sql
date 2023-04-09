-- => 'PARA FIXAR

-- Para fixar, responda como seria possível encontrar as seguintes informações:

-- => 1 - Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

SELECT DATEDIFF('2030-01-20', CURRENT_DATE()) AS 'diferença de dias';
-- OU
SELECT DATEDIFF('2030-01-20', NOW()) AS 'diferença de dias';

-- => 2 - Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('11:00:00', '10:25:45') AS 'diferença de horas';
