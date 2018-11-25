import { sum } from "../../util/sum";

let i = 10;

beforeEach(() => {
  i = 20;
});

afterEach(() => {
  i = 10;
});

test("BeforAfterTest", () => {
  i = sum(i, 10);
  expect(sum(i, 10)).toBe(40);
});

test("BeforAfterTest", () => {
  // beforEachが呼ばれるためiが20になるので30が正解
  expect(sum(i, 10)).toBe(30);
});

// 下記のテストは失敗する
// test("BeforAfterTest", () => {
//   expect(sum(i, 10)).toBe(20);
// });

