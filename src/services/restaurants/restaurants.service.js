import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (
  location = "37.7749295,-122.4194155"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformResponse) => {
    console.log(transformResponse);
  })
  .catch((err) => {
    console.log(err);
  });
