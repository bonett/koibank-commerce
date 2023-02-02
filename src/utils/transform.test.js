import { isEmpty, isString, isNumber, isBoolean, convertType, toLower } from "../utils/transform";

describe("Utils - transform utilities", () => {
  test("Should validate isEmpty", () => {
    const obj = isEmpty({});
    expect(obj).toEqual(true);
  });

  test("Should validate isString", () => {
    const text = isString("test");
    expect(text).toEqual(true);
  });

  test("Should validate isNumber", () => {
    const num = isNumber(1);
    expect(num).toEqual(true);
  });

  test("Should validate isBoolean", () => {
    let flag = true;
    const bool = isBoolean(flag);
    expect(bool).toEqual(true);
  });
  
  test("Should validate convertType number to string", () => {
    const num = convertType(12);
    expect(num).toEqual('12');
  });
  
  test("Should validate toLower", () => {
    const text = toLower('TEXT');
    expect(text).toEqual('text');
  });
});
