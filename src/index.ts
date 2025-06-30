class MathTool {
  static PI: number = 3.14;
  static multi(x: number, y: number) {
    return x * y;
  }
}

// new 없이 사용하기, 클래스 안에 사용할 속성과 메서드에 `static`을 붙인다.
MathTool.PI;
MathTool.multi(4, 8);
type UserType = { age: number; study: boolean };
const hong: UserType = { age: 10, study: true };
const kim: UserType = { age: 20, study: false };
const park: UserType = { age: 22, study: true };
const 학생목록배열: UserType[] = [hong, kim, park];
const 공부한사람배열: UserType[] = 학생목록배열.filter(function (
  요소: UserType,
  인덱스: number,
  원본배열: UserType[]
) {
  if (요소.study) {
    return 요소;
  }
});
