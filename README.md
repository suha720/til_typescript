# Scope(범위)

- 변수가 살아남는 범위
- 변수를 찾아서 사용할 수 있는 범위

## 1. Scope 종류

- `전역` 스코프 : 코드에서 어디에서든 접근 및 사용 가능(var, let, const)
- `지역` 스코프 : `function` 또는 `{}` 안쪽에서만 사용 가능
- `블록` 스코프 : `{}` 블록 안에서만 사용 가능(if, for 등에서 let, const)

## 2. `전역` 간단 예제

- 코드 어디서나 사용할 수 있는 범위

```js
let message = "Hi"; // 전역
function sayHi() {
  console.log(message);
}
sayHi();
```

## 3. `지역` 간단 예제

```js
function sayHi() {
  let message = "Hi"; // 지역
  console.log(message);
}
sayHi();
```

## `전역`과 `지역` 간단 예제

```js
let message = "Hi"; // 전역
function sayHi() {
  let message = "How about you"; // 지역
  console.log(message);
}
sayHi(); // How about you, 지역이 우선 / 인터프리터라서 그런가봐
```

## 5. `블록` 간단 예제

- 옛날에는 var 를 사용함. 문제가 많음

```js
const age = 0;
{
  const age = 5;
  const sub = "study";
}
console.log(age); // 0
console.log(sub); // 오류
```

```js
let age = 0;
{
  let age = 5;
  let sub = "study";
}
console.log(age); // 0
console.log(sub); // 오류
```

- var 는 scope 가 규칙적이지 않고, 무조건 `전역`으로 생성됨

```js
var age = 0;
{
  var age = 5;
  var sub = "study";
}
console.log(age); // 5
console.log(sub); // study
```

- var 는 `{}` 블록 스코프는 없고, function 지역 스코프는 있다.

```js
var age = 0;
// function 지역 스코프
function showAge() {
  var age = 100;
}
console.log(age); // 5
showAge();

{
  var age = 50;
}
console.log(age); // 5
```

## 6. 전체 스코프 정리

- let, const 는 `{}` 에 따라서 스코프가 정리 된다.

```js
let age = 0;
const job = "학생";
{
  let age = 8;
  let job = "개발자";
}
function showPerson() {
  let age = 40;
  let job = "저택경비원";
}

if (true) {
  let age = 400;
  let job = "비행사";
}
```

- var 는 function 에 따라 스코프가 정리 된다
- var 에서 함수는 안에서만 사용하고 아무 소용이 없다

```js
var age = 0;
var job = "학생";
{
  var age = 8;
  var job = "개발자";
}
function showPerson() {
  var age = 40;
  var job = "저택경비원";
}

if (true) {
  var age = 400;
  var job = "비행사";
}
```

## 7. 간단 문답

```js
if (true) {
  let age = 100;
}
console.log(age); // 에러
```

```js
if (true) {
  var age = 100;
}
console.log(age); // 100
```

# 호이스팅의 이해(변수에서)

- 만들지 않았는데 사용가능 한 것

## 1. 호이스팅이 일어나지 않는 경우

```js
console.log(age); // Error
let age = 10;
```

```js
console.log(age); // Error
const age = 10;
```

```js
let age = 10;
console.log(age); // 10
```

## 2. 호이스팅이 일어나는 경우

```js
console.log(age); // let, const 와 달리 `undefined` 발생함. 에러는 아님
var age = 10;
```

# 변수의 재정의

## 1. 재정의 불가능한 경우

- 불가능

```js
let age = 10;
let age = 100;

const job = "학생";
const job = "개발자";
```

- 가능

```js
let age = 10;
{
  let age = 100;
}

const job = "학생";
{
  const job = "개발자";
}
```

## 2. 막 ~ 재정의하는 경우

```js
var age = 10;
var age = 100;

var job = "학생";
var job = "개발자";
```

```js
var age = 10;
{
  var age = 100;
}
var job = "학생";
{
  var job = "개발자";
}
```

# 그렇다면 let, const, var 중에 무엇을 우선으로 할까?

## 1. 무조건 const 로 하세요

```js
const age = 0;
```

## 2. 코딩을 하다보니 값이 변경이 되어야 한다면

- 진행중에 필요에 의해서 let 으로 수정한다.

```js
let age = 0;
age = 18;
```

# 함수에서의 스코프

## 1. 중첩 함수

- 데이터를 숨기고, 기능도 숨기고
- 안전한 코드가 구성됨.

```js
function 외부() {
  const nickName = "사람";
  // 중첩함수
  function 내부() {
    console.log(nickName);
  }
}
console.log(nickName); // 에러
내부(); // 에러
외부();
```

## 2. 함수 외부 변수 접근 제한

- 데이터를 숨긴다.(password)
- 원하는 동작만으로 데이터를 확인시킨다. (내부함수)

```js
function 외부() {
  const password = "qwer";
  // 중첩함수
  function 내부() {
    return password;
  }
  return 내부;
}

const 기능 = 외부(); // 가능
const result = 기능(); // 가능, 외부() 함수는 `내부()` 라는 함수를 리턴하기 때문에 기능이 `함수` 가능
```

## 3. 클로저(Closer)

- 함수는 실행하고 나면 함수 종료시 함수 내부의 변수는 제거됨.
- 그런데 함수를 실행하고 함수 종류 후에도 내부 변수를 유지하는 것.
- 일반적 함수는 데이터를 유지 못하고 사라진다.

```ts
function showAge(): void {
  const age: number = 10;
  console.log(age);
}
showAge();
```

- 클로저로 변수값 유지하기

```js
function showAge() {
  let age = 10;

  // 클로저입니다
  return function () {
    age += 1;
    return age;
  };
}
const a = showAge();
a(); // 11
a(); // 12
```

```ts
type returnType = () => number;

function showAge(): returnType {
  let age: number = 10;

  // 클로저입니다
  return function (): number {
    age += 1;
    return age;
  };
}
const a = showAge();
a(); // 11
a(); // 12
```

- 클로저로 배열의 요소 관리하기

```js
function createList() {
  let itemArr = [];
  return {
    // add 에 재료를 담으면 itemArr 에 추가한다.
    add(item) {
      itemArr.push(item);
    },
    // show(): 전체 imtemArr 보여주기
    show() {
      return itemArr;
    },
  };
}

// itemArr; // 에러, 스코프 위반
const myLisy = createList();
myList.add("사과");
myList.add("딸기");
myList.show(); // ["사과", "딸기"]
```

```ts
type ReturnType = { add: (item: string) => void; show: () => string[] };

function createList(): ReturnType {
  let itemArr: string[] = [];

  return {
    add(item: string): void {
      itemArr.push(item);
    },
    show(): string[] {
      return itemArr;
    },
  };
}
// itemArr; // Error 스코프 위반
const myList: ReturnType = createList();
myList.add("사과");
myList.add("딸기");
myList.show(); // ["사과", "딸기"]
```

- 클로저는 `함수 안쪽의 데이터를 유지`한다. 함수 종료되더라도
