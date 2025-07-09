interface 약속 {
  이름: string;
}

class 사람 implements 약속 {
  이름: string;
}

type 약속타입 = {
  이름: string;
};

class 강아지 implements 약속타입 {
  이름: string;
}
