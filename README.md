# ts 심화 - 클래스 정의하기

- `new` 해서 새로운 `인스턴스 변수 타입 정의`

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  name: string;
  contry: string;
  download: number;
}
/**
 * {
 *    name: string;
 *    contry: string;
 *    download: number;
 * }
 */
const game = new Game();
// 사용자가 직접 값을 달아줌.
game.name = "포트리스";
game.contry = "한국";
game.download = 100;
```

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  name: string;
  contry: string;
  download: number;
  // new 붙여서 실행하면 결과로 인스턴스 생성자
  constructor(name: string, contry: string, download: number) {
    this.name = name;
    this.contry = contry;
    this.download = download;
  }
}
/**
 * {
 *    name: string;
 *    contry: string;
 *    download: number;
 * }
 */
const game = new Game("포트리스", "한국", 100);
```

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  //  속성
  name: string;
  contry: string;
  download: number;
  // new 붙여서 실행하면 결과로 인스턴스 생성자, 인스턴스 생성자
  constructor(name: string, contry: string, download: number) {
    this.name = name;
    this.contry = contry;
    this.download = download;
  }

  // 메서드
  introduce() {
    return "${this.name} 게임은 ${this.contry} 에서 개발, ${this.download} 인기가 있습니다";
  }
}
/**
 * {
 *    name: string;
 *    contry: string;
 *    download: number;
 *    introduce(): number
 * }
 */
const game = new Game("포트리스", "한국", 100);
console.log(game.name);
console.log(game.contry);
console.log(game.download);
```
