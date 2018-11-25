import { sum } from "../../util/sum";

let i = 10;

beforeAll(() => {
  i = 20;
});

afterAll(() => {
  i = 10;
});

test("BeforAfterTest", () => {
  i = sum(i, 10);
  expect(sum(i, 10)).toBe(40);
});

test("BeforAfterTest", () => {
  // beforAllの場合最初の１回しか呼ばれないため再代入された i = 30 のままである
  expect(sum(i, 10)).toBe(40);
});

// 下記のテストは失敗する
// test("BeforAfterTest", () => {
//   expect(sum(i, 10)).toBe(20);
// });

