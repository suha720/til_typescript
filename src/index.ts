// type Good = {
//     title: string;
//     price: number;
//     sale: boolean;
// };

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
