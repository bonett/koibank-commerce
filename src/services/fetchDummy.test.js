import "@testing-library/jest-dom/extend-expect";
import { fetchMock } from "./fetchDummy";
import { TBodyRows } from "../constants";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(TBodyRows)
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("Fetching", () => {
  test("Should fetch data", async () => {
    const { result } = await fetchMock(true, 1000);
    expect(result.length).toEqual(18);
  });
});