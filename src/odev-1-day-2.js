// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

console.log("Soru 1- Girilen sayıların asal sayı olup olmadığını kontrol eden fonksiyon.");
function checkPrimes(...nums) {
    for (let n of nums) {
        let isPrime = true;
        if (n < 2) {
            isPrime = false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(n + " Asal sayıdır.");
        } else {
            console.log(n + " Asal sayı değildir.");
        }
    }
}

checkPrimes(3, 5, 7, 10, 14, 29, 11, 30);





// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

console.log("Soru 2- Girilen 2 sayının arkadaş sayılar olup olmadığını kontrol eden fonksiyon");
function checkAmicable(num1, num2) {
    function sumOfDivisors(num) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
    
    if (sumOfDivisors(num1) === num2 && sumOfDivisors(num2) === num1) {
        console.log(num1 + " ve " + num2 + " arkadaş sayılardır.");
    } else {
        console.log(num1 + " ve " + num2 + " arkadaş sayı değildir.");
    }
}

checkAmicable(220, 284);
checkAmicable(1184, 1210);




// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

console.log("Soru 3- 1000'e kadar olan mükemmel sayıları yazdıran fonksiyon");
function findPerfectNumbers() {
    for (let num = 1; num <= 1000; num++) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        if (sum === num) {
            console.log(num + " mükemmel sayıdır.");
        }
    }
}

findPerfectNumbers();




// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

console.log("Soru 4- 1000'e kadar olan asal sayıları yazdıran fonksiyon");
function listPrimes() {
    for (let num = 2; num <= 1000; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " asal sayıdır.");
        }
    }
}

listPrimes();


