// void bubble_sort (int vetor[], int n) {
//     int k, j, aux;

//     for (k = n - 1; k > 0; k--) {
//         printf("\n[%d] ", k);

//         for (j = 0; j < k; j++) {
//             printf("%d, ", j);

//             if (vetor[j] > vetor[j + 1]) {
//                 aux          = vetor[j];
//                 vetor[j]     = vetor[j + 1];
//                 vetor[j + 1] = aux;
//             }
//         }
//     }
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (numbers[index] > numbers[secondIndex]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }

// console.log(numbers);

let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
        newArray.push(numbers[index] * numbers[index + 1]);
    } else {
        newArray.push(numbers[index] * 2);
    }
}

console.log(newArray);
