# Reference 데이터 타입

- Primitive 데이터
  - number, string , null, undefined, symbol, boolean
  - any, unknown, never
- 기본형 데이터가 너무 많다면 묶어서 관리하자.
  - 이름 참조 타입, 즉 Reference 타입이라고 합니다.
  - Reference 타입을 객체 라고 한다.

## 1. 배열(Array)

### 1.1. 배열이 필요한 경우

- 사용자 정보를 관리한다.

```ts
const user_1: string = "home";
const user_2: string = "wang";
const user_3: string = "cho";
```

- 사용자 정보가 너무 많다. 그래서 관리(변수명 짓기) 등이 어렵다.
- 문법적으로 원시데이터를 모아서 관리하는 방안이 제시

```js
const userArr = ["a", "b", "c"];
userArr[0]; // "a"
userArr[1]; // "b"
userArr[2]; // "c"
userArr.length;
```

```ts
// 배열 기호로 데이터 종류 표현하기
const userArr: string[] = ["a", "b", "c"];
const userAge: number[] = [1, 2, 3];
const userInfo: (string | number | boolean)[] = ["A", true, 1];
// 제네릭으로 데이터 종류 표현하기
const userArrGeneric: Array<string> = ["q", "w", "e"];
const userInfoGeneric: Array<string | number | boolean> = ["A", true, 1];
```

- 중첩된 배열

```ts
// 배열 기호로 데이터 종류 표현하기
const doubleArr: number[][] = [
  [1, 2],
  [300, 400],
];

// 제네릭으로 데이터 종류 표현하기
const doubleArrGeneric: Array<number[]> = [
  [1, 2],
  [300, 400],
];
const doubleArrGeneric2: Array<Array<number>> = [
  [1, 2],
  [300, 400],
];
```

### 1.2. 타입스크립트에만 있는 `튜플`

- 배열의 요소에 타입을 별도로 지정할 수 있다.
- 배열의 길이를 고정시킬 수 있다.
- 배열의 요소를 제거 또는 추가할 수 없다.

```ts
// Tuple (약속을 지켜라!)
const numTuple: [number, number, number] = [2, 4, 6];
const strTuple: [string, string, string] = ["a", "s", "d"];
const userTuple: [string, number, boolean] = ["a", 1, true];
const memberTuple: [string, number][] = [
  ["a", 1],
  ["b", 2],
];
```

## 2. 객체(Object)

- 원시데이터를 묶어서 관리한다.
- 데이터의 각 요소의 이름, 즉 속성(Property)를 정해서 관리한다.
- 아래 문장을 `객체 리터럴` 이라고 하며, 많이 중요합니다.

```js
{
  이름: 원시데이터,
}
```

### 2.1. 객체의 이해

- 여러명의 사용자 정보를 관리한다.
- 만약 배열로 관리한다면?

```js
const userName = ["a", "b", "c"];
const userAge = [4, 6, 8];
```

- 만약 객체 리터럴 관리한다면

```js
const a = { name: "kim", age: 20 };
a.name; // "kim"
a["name"]; // "kim"
const b = { name: "park", age: 30 };
```

- 번외 (내가 만든 `객체 타입 정의`)

```ts
type Person = {
  name: string;
  age: number;
};

const a: Person = { name: "kim", age: 20 };
a.name; // "kim"
a["name"]; // "kim"

const b: Person = { name: "park", age: 30 };
```

- 번외 (내가 만든 데이터 `객체 인터페이스`)

```ts
// 객체 타입이랑 인터페이스 조금 모양이 다르니, 한번 봐봐
interface Person {
  name: string;
  age: number;
}

const a: Person = { name: "kim", age: 20 };
a.name; // "kim"
a["name"]; // "kim"

const b: Person = { name: "park", age: 30 };
```

## 3. 객체와 배열 활용
```ts
// 타입, 인터페이스 중 선택1
type Good = {
    title: string;
    price: number;
    sale: boolean;
};
// 타입, 인터페이스 중 선택1
interface Good {
    title: string;
    price: number;
    sale: boolean;
};


const goodArr:Good[] = [
    {title: "사과", price: 1000, sale: true},
    {title: "딸기", price: 3000, sale: false},
    {title: "바나나", price: 5000, sale: true},
]

const goodArrG:Array<Good> = [
    {title: "사과", price: 1000, sale: true},
    {title: "딸기", price: 3000, sale: false},
    {title: "바나나", price: 5000, sale: true},
]
```