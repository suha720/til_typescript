# 조건문(Condition)

## 1. if 문

- 조건의 결과가 true 이면 { 안쪽 실행}

```ts
const age: number = 18;
if (a >= 18) {
  console.log("성인입니다.");
}
```

- 만약 { 한줄만 실행 한다면}

```ts
// 참고, 축약 가능
const age: number = 18;
if (a >= 18) console.log("성인입니다.");
```

- if ~ else 구문

```ts
const age: number = 10;
if (a >= 18) {
  console.log("성인입니다.");
} else {
  console.log("청소년입니다.");
}
```

- if ~ else if ~ else if ~ else 구문

```ts
const age: number = 25;
if (a >= 40) {
  console.log("40대 입니다.");
} else if (a >= 30) {
  console.log("30대 입니다.");
} else if (a >= 20) {
  console.log("20대 입니다.");
} else {
  console.log("미성년자 입니다.");
}
```

## 2. switch 문

- 값이 일치하는지를 비교해서 코드 분기

```ts
const lever: string = "5층";
switch (lever) {
  case "5층":
    console.log("5층 입니다.");
    break;
  case "4층":
    console.log("4층 입니다.");
    break;
  case "3층":
    console.log("3층 입니다.");
    break;
  case "2층":
    console.log("2층 입니다.");
    break;
  case "1층":
    console.log("1층 입니다.");
    break;
  default:
    console.log("아무 층이나 누르세요.");
    break;
}
```

- switch 문의 값은 직접 원시값으로 작성시 오류발생이 가능
- TypeScript 에 있는 `enum` 을 사용하시길 권장
- enum 은 정해진 값만 사용하게 권장할 때(열거형)
- 인터넷 상태 등에 대한 내용을 코드 할때 많이 사용

```ts
enum Level {
  L1 = "1층",
  L2 = "2층",
  L3 = "3층",
  L4 = "4층",
  L5 = "5층",
}

const Level: string = "5층";
switch (Level) {
  case Level.L5:
    console.log("5층 입니다.");
    break;
  case Level.L4:
    console.log("4층 입니다.");
    break;
  case Level.L3:
    console.log("3층 입니다.");
    break;
  case Level.L2:
    console.log("2층 입니다.");
    break;
  case Level.L1:
    console.log("1층 입니다.");
    break;
  default:
    console.log("아무 층이나 누르세요.");
    break;
}
```

- 네트워크 상태를 체크해 보자

```ts
enum NetworkStatus {
  offline = "Off",
  Wifi = "Wifi",
  LTE = "LTE",
  G5 = "5G",
}

const net = NetworkStatus.G5;
switch (net) {
  case NetworkStatus.G5:
    break;
  case NetworkStatus.LTE:
    break;
  case NetworkStatus.Wifi:
    break;
  case NetworkStatus.offline:
    break;
}
```

# 반복문(Loop)

- 조건이 참이면 코드를 반복 실행함.

## 1. for

- 조건이 참 이면서 반복 횟수를 알때 사용함

```ts
const 반복횟수: number = 10;
for (let i: number = 0; i < 반복횟수; i++) {
  // 코드 실행
}

const arr: number[] = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  arr[i];
}

const num: number = 10;
for (let i: number = 0; i < num; i++) {
  if (i === 5) {
    break;
  }
  // 실행코드
}

const num: number = 10;
for (let i: number = 0; i < num; i++) {
  if (i === 5) {
    continue; // 실행 코드를 건너띄고 계속 반복
  }
  // 실행코드
}

const num: number = 10;
for (let i: number = 0; i < num; i++) {
  for (let j: number = 0; i < 5; j++) {
    if (j === 2) {
      break;
    }
    console.log("Hi");
  }
}
```

## 2. while

- `조건이 참` 이면서 `반복 횟수를 모를 때` 사용함

```ts
let count: number = 0;
while (count < 5) {
  console.log(count);
  // 반드시 조건을 거짓으로 만들도록 코드 필요.
  count++;
}
```

## 3. do while

- `일단 한번은 실행`하자. 그리고, `조건이 참` 이면서 반복 횟수를 모를 때 사용함

```ts
// 아래 코드는 한번도 실행되지 않는다. 조건이 거짓이므로
let count: number = 5;
while (count < 5) {
  console.log(count);
  // 반드시 조건을 거짓으로 만들도록 코드 필요.
  count++;
}

let tries: number = 0;
do {
  // 코드 실행
  // 무한 루프 방지 거짓을 만들 값
  tries++;
} while (tries < 5);
```

## 4. for ... of

- 배열의 각각의 요소에 값을 알아낼 때

```ts
const arr: number[] = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  arr[i];
}

for (let item of arr) {
  item; // 1 => 2 => 3
}
```

## 5. for ... in

- `객체`의 `속성명`을 알아낼 때
```ts
const gang = {age: 10, city: "daegu"};
for (let key in gang) {
  key; // age => city
  gang[key]; // 10 => "daegu"
}
```
