import { TBodyRows } from "../constants";

export const fetchMock = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ result: TBodyRows });
      } else {
        reject({ message: "Error" });
      }
    }, timeout || 1000);
  });
};
