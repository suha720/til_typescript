let numA = 5;
let numB = 8;
const resultPlus = numA + numB;
const resultMinus = numA - numB;
const resultDevide = numA / numB;
const resultMulti = numA * numB;
/**
 * 사칙연산 함수
 * - 숫자 2개를 입력하시면 결과가 나옵니다.
 * - 기호는 4가지(+, -, * /)를 사용하실 수 있습니다.
 *
 * 사용예시
 * ```javascript
 * const result:number = calc(5, 4, "+");
 * ```
 * @param {number} a
 * @param {number} b
 * @param {string} sign
 * @returns {number}
 */
var Sign;
(function (Sign) {
    Sign["Plus"] = "+";
    Sign["Minus"] = "-";
    Sign["Devide"] = "/";
    Sign["Multi"] = "*";
})(Sign || (Sign = {}));
function calc(a, b, sign) {
    let result;
    switch (sign) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }
    return result;
}
const result = calc(4, 8, "*");
export {};
