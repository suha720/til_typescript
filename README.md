# 연산

## 1. 사칙연산과 나머지 연산

- `+ 연산`

```js
// + 연산
const a: number = 0;
const b: number = 5;
const c: number = a + b; // 5

// 글자 + 글자
const str_a: string = "Hi";
const str_b: string = "!!";
const str_c: string = str_a + str + b; // Hi!!

// 글자 + 숫자
const str_a: string = "go";
const num_b: number = 3;
const result: string = str_a + num_b; // "go3"

// 글자 + 글자
const str_a: string = "100";
const str_b: string = "999";
const result: string = str_a + str_b; // 100999

// 연산자 줄이기
let a: number = 1;
a = a + 1;
a += 1;
a++;
```

- `- 연산`

```ts
const a: number = 0;
const b: number = 1;
const c: number = a - b;

// 글자 - 글자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: string = "반가워";
const c: number = a - b; // NaN

// case 1 : 글자 - 숫자
const a: string = "안녕";
const b: number = 5;
const c: number = a - b; // NaN

// case 2 : 글자 - 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a - b; // 95

// 연산자 줄이기
let a: number = 1;
a = a - 1;
a -= 1;
a--;
```

- `* 연산`

```ts
const a: number = 0;
const b: number = 1;
const c: number = a * b;

// 글자 - 글자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: string = "반가워";
const c: number = a * b; // NaN

// case 1 : 글자 - 숫자
const a: string = "안녕";
const b: number = 5;
const c: number = a * b; // NaN

// case 2 : 글자 - 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a * b; // 500

// 연산자 줄이기
let a:number = 1;
a = a 8 1;
a *= 1;
```

- `/ 연산`

```ts
const a: number = 0;
const b: number = 1;
const c: number = a / b;

// 글자 - 글자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: string = "반가워";
const c: number = a / b; // NaN

// case 1 : 글자 - 숫자
const a: string = "안녕";
const b: number = 5;
const c: number = a / b; // NaN

// case 2 : 글자 - 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a / b; // 20

// 연산자 줄이기
let a: number = 5;
a = a / 1;
a /= 1;
```

- `% 연산`

```ts
const a: number = 0;
const b: number = 1;
const c: number = a % b;

// 글자 - 글자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: string = "반가워";
const c: number = a % b; // NaN

// case 1 : 글자 - 숫자
const a: string = "안녕";
const b: number = 5;
const c: number = a % b; // NaN

// case 2 : 글자 - 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a % b; // 0

// 연산자 줄이기
let a: number = 5;
a = a % 1;
a %= 1;
```

## 2. 논리 연산자

- true 와 false 판단'
- falshy 한 판단
  - ` false 0 null underfined "", NaN`

```ts
// OR 연산자(또는) : 하나만 true 이면 된다
const result: result = true || true;

const lsLogin: boolean = false;
// true 출력이 아니라, true 값인 div 태그가 result에 담김
const result: boolean | string = lsLogin || "<div>로그인 하세요</div>";

// AND 연산자(그리고) : 둘다 true 이면 된다
const result: result = true && true;

const lsLogin: boolean = true;
//true 출력이 아니라, true 값인 div 태그가 result에 담김
const result: boolean | string = lsLogin && "<div>어서오세요</div>";

// NOT 연산자(반대)
const a: boolean = !true; // false

// 토글 버튼 만들기
let isLogin: boolean = false;
button.addEventListener("click", function () {
  isLogin = !isLogin;
});

// XOR 연산자(그리고) : 둘다 true 이면 된다
```

## 3. 비교 연산자 (결과는 true, false 가 나옴)

```ts
let result: boolean = 1 > 2;
let result: boolean = 1 >= 2;
let result: boolean = 1 == 2;
let result: boolean = 1 != 2;

// 동치 연산자, 타입과 값 모두 비교함
let result: boolean = 1 === 2;
let result: boolean = 1 !== 2;
```

## 4. 3항 연산자 (if문 줄여쓰기)

```ts
const str: string = 1 > 3 ? "true 네용" : "false 네용";
```

## 5. 병합 연산자 (최신 문법)

- 기본 값을 세팅 할 때 활용
- null, undefined 가 아닌 것을 찾아서 세팅함.

```ts
let userName: string; // 현재 undefiend, 값을 안넣어줘서
let displayName: string = userName ?? "Guest"; // undefiend 이거나 null일때 초기값인 Guest 임

let userName: string = "A"; // 현재 A
let displayName: string = userName ?? "Guest"; // 현재 A 임
```

## 6. 옵셔널체이닝 (최신 문법 - `?.`)

- 객체가 존재하는가? 체크

```ts
const userInfo = { age: 12, name: "학수" };
const age = userInfo?.age;
const anamege = userInfo?.name;
const acity = userInfo?.city; // undefined 또는 null

const userInfo = { age: 12, name: "hong" };
let age;
if (userInfo.age) {
  age = userInfo.age;
}
let name;
if (userInfo.name) {
  name = userInfo.name;
}
let city;
if (userInfo.city) {
  city = userInfo.city;
}
```

## 7. typeof 연산자 (데이터 타입을 알려줘 )

```ts
console.log(typeof 123); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean

const age: number = 123;
console.log(typeof age); // number;

const arr: number[] = [1, 2, 3];
console.log(typeof arr); // number[]; 실제로는 obj 라고 출력됨

const obj: { age: number } = { age: 10 };
console.log(typeof obj); // {age:number}; 실제로는 obj 라고 출력됨

type T = { age: number };
const obj: T = { age: 10 };
console.log(typeof obj); // T; 실제로는 obj 라고 출력됨
```

- `기본형을 제외하고 참조형 데이터들은 직접 비교를 하는 방안을 찾아야한다.`
  - 타입 좁히기(Type Guard) 문법, 유틸리티 타입 사용 문법 등의 학습 필요.