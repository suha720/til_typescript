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
console.log(game.name)
console.log(game.contry)
console.log(game.download)
