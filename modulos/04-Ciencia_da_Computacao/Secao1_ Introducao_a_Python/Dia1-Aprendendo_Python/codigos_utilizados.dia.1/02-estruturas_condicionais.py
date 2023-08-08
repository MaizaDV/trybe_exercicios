# Vamos imaginar a seguinte situação: em uma análise de dados sobre pessoas
# desenvolvedoras, temos uma base de dados que contém o salário delas, mas não
# mostra a informação sobre sua senioridade.

# Para fazer um agrupamento por essa classificação de nível de experiência,
# precisamos criar uma nova coluna que será baseada no salário:

# Menor que R$2.000,00, pessoa desenvolvedora estagiária;

# Entre R$2.000,00 e R$5.800,00, pessoa desenvolvedora júnior;

# Entre R$5.800,00 e R$7.500,00, pessoa desenvolvedora pleno;

# Entre R$7.500,00 e R$10.500,00, pessoa desenvolvedora sênior;

# Qualquer valor acima do que já foi mencionado a pessoa desenvolvedora é
# considerada liderança.
salary = 2000
position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

# Em alguns casos, em que não seja prejudicada a legibilidade, podemos criar
# estruturas de mapeamento (dicts) para simplificar o aninhamento de
# condicionais. Como o exemplo a seguir:

print("──── Estruturas de repetição ───────────────────────────────────────")
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# : Em alguns casos, podemos ainda querer percorrer uma sequência numérica, e
# para isto iteramos sobre a estrutura de dados range.
for index in range(5):
    print(index)

print("Compreensão de lista (list comprehension)")
# A compreensão de listas é declarada da mesma maneira que uma lista comum,
# porém no lugar dos elementos nós colocamos a iteração que vai gerar os
# elementos da nova lista.
min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Poderíamos listar também somente o nome dos restaurantes,
# veja o exemplo abaixo:
# min_rating = 3.0
filtered_restaurants = [
    restaurant["name"]
    # aqui pedimos somente o nome do restaurante
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# A compreensão de listas também funciona com listas de strings. A seguinte
# cria uma nova lista de strings com os nomes que contém a letra ‘a’.
names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe
# a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# O exemplo a seguir usa uma compreensão de listas para criar uma lista
# com o quadrado dos números entre 1 e 10.

quadrados = [x*x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# Isto é equivalente às operações de map e filter em JavaScript.

n = 10
last, next = 0, 1
# Este truque pode ser utilizado também para fazer a troca de
# valores entre variáveis: a, b = b, a.
while last < n:
    print(last)
    last, next = next, last + next

# Exercício 12
# O Fatorial de um número inteiro é representado pela multiplicação de todos
# os números predecessores maiores que 0.
# Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5.
# Escreva um código que calcule o fatorial de um número inteiro.
number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
print(result)

# Uma versão mais pythonica dessa solução usaria range:
number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number + 1):
    result *= factor
print(result)
# Exercício 13
# Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
# Após algumas mudanças estes valores precisam ser ajustados para
# avaliações de 0 a 100.
# Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10].
# Escreva um código capaz de gerar as avaliações após a mudança.
# Neste caso o resultado deveria ser [60, 80, 50, 90, 100].

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

# Embora essa solução seja perfeita, é muito mais comum
# ver Pythonistas escrevendo compreensões de lista:
ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings

# Exercício 14
# Percorra a lista do exercício 13 e
# imprima “Múltiplo de 3” se o elemento for divisível por 3.
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0:  # se o resto é zero, é divisível
        print(f"{rating} é múltiplo de 3")
