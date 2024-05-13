import { IEccentricities } from "../../../../../../../../api/adapters/types";

export const splitArray = (data: Array<IEccentricities>) => {

  const maxElements = 5
  const result = []

  for (let i = 0; i < data.length; i += maxElements) {
    result.push(data.slice(i, i + maxElements));
  }

  return result;
}