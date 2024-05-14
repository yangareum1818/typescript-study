// 기본 타입
const a: number = 5;
const b: string = "5";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123;

// 심화
const g: symbol = Symbol.for("abc");
const h: bigint = 1000000000n;

// 고정된 원시값
const i: 234 = 234;
// const j: 234 = 235;  error

// 타입 선언
type Add = (x: number, y: number) => number;
type Obj = { lat: number; lon: number };

// 함수 타입
function add(x: number, y: number): number {
  return x + y;
}
const add2: (x: number, y: number) => number = (x, y) => x + y;
const add3: Add = (x, y) => x + y;

// 객체 타입
const obj: Obj = { lat: 37.5, lon: 127.5 };
const obj2: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// 배열 타입
const arr: string[] = ["123", "456", "678"];
const arr2: number[] = [123, 456];
// 제네릭 배열 타입
const arr3: Array<number> = [123, 345, 567, 789];
// 튜플 배열 타입 (길이가 고정된 배열)
const arr4: [number, number, string] = [123, 345, "576"];
// const arr5: [number, number, string] = [123, 345, "576", '789'];   error
