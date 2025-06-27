class MathTool {
  static PI = 3.14;
  static multi(x, y) {
    return x * y;
  }
}

// new 없이 사용하기, 클래스 안에 사용할 속성과 메서드에 `static`을 붙인다.
MathTool.PI;
MathTool.multi(4, 8);