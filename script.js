// 1) Верните строку состоящую из всех ячеек массива
const arrToString = (arr) => {
    return arr.join(' ')
}

// 2) Верните самое большое и самое маленькое значение из массива
const bigAndSmall = (arr) => {
    let sortArr = arr.sort((a, b) => a - b)
    return [sortArr[0], sortArr[sortArr.length - 1]]
}

// 3) Верните сумму всех четных чисел из массива
const sumOfEven = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += Number(arr[i])
        }
    }
    return sum
}

// 4) Напишите функцию которая выведет в консоль все значения массива в обратном порядке
const arrReverse = (arr) => {
    return arr.reverse().join()
}

// 5) Перезапишите каждый элемент массива в числовой тип
const stringToNumber = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(Number(arr[i]))
    }
    return newArr
}

// 6) Напишите функцию результатом выполнения которой мы получим массив состоящий из суммы цифр каждого элемента
const sumOfElements = (arr) => {
    let newArr = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += Number(arr[i][j])
        }
        newArr = newArr.concat(sum)
        sum = 0
    }
    return newArr
}

console.log(sumOfElements([ "1", "43", "23", "54", "2", "3", "89"]))