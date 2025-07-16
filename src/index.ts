// interface IdolType {
//   name: string;
//   age?: string; // 옵셔널
//   year: number;
// }

type IdolType = {
  readonly name: string; // 읽기전용
  age?: string; // 옵셔널
  year: number;
};

let bts: IdolType = {
  name: "BTS",
  year: 2020,
};

bts.name = "홍성"; // Error 발생
