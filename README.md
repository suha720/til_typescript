# class

- 클래스는 `설계도` 이다.
- 클래스 즉, 설계도를 기반으로 `객체(결과물)`을 만드는 것을 말함.
- 목적은 `인스턴스`, 즉 `new 를 통해서 객체`를 대량 생산하는 것
- class 는 문법으로 존재하며, 실무에서 직접 class 를 만드는 경우는 극히 드물다.
- 밴엔드를 js 로 만들 때는 이해 필수 입니다.

## 1. class 기본 모양

```js
class 클래스명 {}
const 인스턴스 = new 클래스명();

class Robot {}
const ins = new Robot();
```

## 2. class 에서 new 하면 실행되는 함수는 약속

- constructor 메서드 : 생성자 메서드 / 디폴트 생성자 메서드

```js
class 클래스명 {
  // 작성 안해도 기본적으로 new 하면 작동됩니다.
  constructor() {}
}
const 인스턴스 = new 클래스명();

class Robot {}
const ins = new Robot();
```

```js
class Robot {
  // 메서드 축약형
  constructor() {
    console.log("Hi");
  }
}
const ins = new Robot();
console.log(ins);
```

```ts
// 종합, 데이터 타입은 `{}` 이렇게 하지말고 그냥 `클래스명`쓰기 알아서 추적함
class 클래스명 {
  // 작성 안해도 기본적으로 new 하면 작동됩니다.
  constructor() {}
}
const 인스턴스: 클래스명 = new 클래스명();

class Robot {
  // 코드 블럭
  // 지역 스코프
}
const ins = new Robot();

class Robot {
  // 메서드 축약형
  constructor() {
    console.log("Hi");
  }
}
const ins: Robot = new Robot();
console.log(ins);
```

- constructor 메서드 : 속성의 초기값을 세팅해 줄 수 있음

## 3. 객체의 `속성`과 `속성값`을 세팅한다.

- {속성: `속성값`}
- constructor 를 활용한다.

```js
class Robot {
  // 메서드 축약형
  constructor(who) {
    this.who = who;
    console.log(`나는 말이야!! ${this.who}`);
  }
}
const ins1 = new Robot("여러분");
console.log(ins1); // Robot { who: '여러분' }

const ins2 = new Robot("팬 여러분");
console.log(ins2); // Robot { who: '팬 여러분' }

const ins3 = new Robot("로봇은");
console.log(ins3); // Robot { who: '로봇은' }

const ins4 = new Robot("깡통이야");
console.log(ins4); // Robot { who: '깡통이야' }
```

- `TypeScript 만의 방식이 존재함`

```ts
class Robot {
  // 여기는 클래스 내부 라서 규칙이 있습니다.
  // 속성을 정의해 줍니다.
  // const, let, var 쓰면 안됩니다.
  who: string;

  // 메서드 축약형
  constructor(who: string) {
    this.who = who;
    console.log(`나는 말이야!! ${this.who}`);
  }
}
const ins1: Robot = new Robot("여러분");
console.log(ins1); // Robot { who: '여러분' }

const ins2: Robot = new Robot("팬 여러분");
console.log(ins2); // Robot { who: '팬 여러분' }

const ins3: Robot = new Robot("로봇은");
console.log(ins3); // Robot { who: '로봇은' }

const ins4: Robot = new Robot("깡통이야");
console.log(ins4); // Robot { who: '깡통이야' }
```

## 4. 객체의 `메서드` 세팅하기

- 메서드는 객체의 기능을 말함.(객체에 만든 함수를 메서드라고 함)

```js
class Robot {
  // 메서드 축약형
  constructor(who) {
    this.who = who;
    console.log(`나는 말이야!! ${this.who}`);
  }
  // 걷기 메서드
  walk() {
    console.log(`${this.who} 님과 같이 걸어요`);
  }
  talk() {
    console.log(`${this.who} 님 소통해요`);
  }
}
const ins1 = new Robot("여러분");
console.log(ins1.who);
ins1.walk();
ins1.talk();
```

```ts
class Robot {
  // 속성 정의
  who: string;

  constructor(who: string) {
    this.who = who;
    console.log(`나는 말이야!! ${this.who}`);
  }
  // 메서드 축약형, 걷기 메서드 / 리턴의 결과 없음
  walk(): void {
    console.log(`${this.who} 님과 같이 걸어요`);
  }
  talk(): void {
    console.log(`${this.who} 님 소통해요`);
  }
}
const ins1: Robot = new Robot("여러분");
console.log(ins1.who);
ins1.walk();
ins1.talk();
```

## 5. 오로지 class 에만 있는 상속(extends)

- `유전자` 처럼 생각하자.

```js
class Animal {
  constructor() {
    this.eye = 2;
  }
  cry() {}
  eat() {}
}
class Cat extends Animal {
  꾹꾹이() {}
}

class Dog extends Animal {
  달짖기() {}
}
```

```ts
class Animal {
  // 속성 정의
  eye: number;
  constructor() {
    this.eye = 2;
  }
  cry(): void {}
  eat(): void {}
}
class Cat extends Animal {
  꾹꾹이(): void {}
}

class Dog extends Animal {
  달짖기(): void {}
}

const ani: Animal = new Animal();
ani.cry();
ani.eat();
const cat: Cat = new Cat();
cat.cry();
cat.eat();
cat.꾹꾹이();
const dog: Dog = new Dog();
```

## 6. 상속에서 속성 값 전달

- 부모님에게 값을 전달하기

```js
class Animal {
  constructor(_blood) {
    this.eye = 2;
    // 수혈해줘.
    this.blood = _blood;
  }
  cry() {}
  eat() {}
}

const ani = new Animal("O형");

class Cat extends Animal {
  // extends 를 하셨으므로
  constructor(_blood) {
    // 엄마, 부모한테 변수 새로 정의해서 돌려주기
    super(_blood);
  }
  꾹꾹이() {}
}

class Dog extends Animal {
  달짖기() {}
}
```

```ts
class Animal {
  blood: string;
  eye: number;
  constructor(_blood: string) {
    this.eye = 2;
    // 수혈해줘.
    this.blood = _blood;
  }
  cry(): void {}
  eat(): void {}
}

const ani: Animal = new Animal("O형");

class Cat extends Animal {
  // extends 를 하셨으므로
  constructor(_blood: string) {
    // 엄마, 부모한테 변수 새로 정의해서 돌려주기
    super(_blood);
  }
  꾹꾹이(): void {}
}

class Dog extends Animal {
  달짖기(): void {}
}
```

## 오로지 TypeScript 에만 존재하는 문법

- public 속성 접근 제어자 (누구나 접근가능)
- private 속성 접근 제어자 (그 누구도 접근불가)
- protected 속성 접근 제어자 (`상속`받은 대상 접근가능)

```ts
class BankAccount {
  // publice 자동 적용
  // 속성 접근 제어자 때문에 let, const, var 적용 불가
  user: string;
  private balance: number;
  constructor(user: string, balance: number) {
    this.user = user;
    this.balance = balance;
  }
  showBalance() {
    this.balance; // 내부에서 활용가능
  }
}

const iu: BankAccount = new BankAccount("아이유", 12345);
iu.user;
iu.balance; // 비공개 데이터라서 오류
```

```ts
class Animal {
  eye: number;
  private nose: number;
  protected lips: number;
}
class Cat extends Animal {
  constructor() {
    super();
  }
  show() {
    this.eye; // public 이라서 마음대로 접근
    this.nose; // Error, private 이라서 wjqrms qnfrk
    this.lips; // Error, protected 이라서 자식 접근 가능
  }
}

// 상속
const cat = new Cat();
//인스턴스 객체 생성
cat.eye; // publice 공용
cat.nose; // private 접근 불가, Error
cat.lips; // protected 접근 불가, Error
```

## 클래스에서 new 없이 사용가능한 속성과 메서드

- `Math.PI, Math.round(), Math.floor() ...` -`static` 를 붙이면 new 없이 사용가능

```js
class MathTool {
  static PI = 3.14;
  static multi(x, y) {
    return x * y;
  }
}

// new 없이 사용하기, 클래스 안에 사용할 속성과 메서드에 `static`을 붙인다.
MathTool.PI;
MathTool.multi(4, 8);
```

```ts
class MathTool {
  static PI: number = 3.14;
  static multi(x: number, y: number) {
    return x * y;
  }
}

// new 없이 사용하기, 클래스 안에 사용할 속성과 메서드에 `static`을 붙인다.
MathTool.PI;
MathTool.multi(4, 8);
```
