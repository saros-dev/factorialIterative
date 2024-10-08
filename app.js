function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

let number = parseInt(prompt("عدد را وارد کنید: "));
let startIterative = performance.now();
let resultIterative = factorialIterative(number);
let endIterative = performance.now();

console.log(`فاکتوریل غیربازگشتی ${number} برابر است با: ${resultIterative}`);
console.log(`زمان اجرای تابع غیربازگشتی: ${endIterative - startIterative} میلی‌ثانیه`);
alert(`فاکتوریل ${number} برابر است با: ${resultIterative}`);