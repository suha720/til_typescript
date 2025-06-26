const member = {userName: "뷔", age : 30, group: "BTS"};
// 나머지 연산자
const {...rest} = member;
console.log(rest);
// 사용하지 않은 나머지 속성만 모으는 연산자
const {userName,...who} = member;
console.log(userName);
console.log(who);
