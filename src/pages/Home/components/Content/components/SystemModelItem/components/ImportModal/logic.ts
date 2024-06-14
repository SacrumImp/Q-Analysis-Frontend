import { RelationType } from "../../../../../../../../classes";
import { IValidationResult } from "./types";

export const validateTable = (data: Array<any>, relationsType: RelationType): IValidationResult => {
  const errors: Array<string> = []

  if (data.length === 0 || data.every(entry => entry.length === 0)) {
    errors.push("Table is empty")
    return {
      isValid: false,
      errorList: errors
    }
  }

  checkRowsSize(data, errors)
  checkSymmetry(data, errors)
  checkHeaders(data, errors)
  validateValues(data, errors, relationsType)
  
  if (!!errors.length) {
    return {
      isValid: false,
      errorList: errors,
    }
  }
  return {
    isValid: true,
    errorList: [],
  }

}

const checkRowsSize = (data: Array<any>, errors: Array<string>) => {
  var rowSize = data[0].length
  var result = data.some(element => {
    return element.length !== rowSize
  });
  if (result) {
    errors.push("The row sizes are not equal")
  }
}

const checkSymmetry = (data: Array<any>, errors: Array<string>) => {
  if (data.length === data[0].length - 1) {
    errors.push("The matrix is not square")
  }
}

const checkHeaders = (data: Array<any>, errors: Array<string>) => {
  var verticalHeaderResult = data.some((element, index) => {
    if (index === 0) return false
    else return element[0] !== index
  })
  var horisontalHeaderResult = data[0].some((element: any, index: number) => {
    if (index === 0) return false
    else return element !== index
  })
  if (verticalHeaderResult || horisontalHeaderResult) {
    errors.push("The component indexes are specified incorrectly")
  }
}

const validateValues = (data: Array<any>, errors: Array<string>, relationsType: RelationType) => {
  var result = data.some((row, index)=> {
    if (index === 0) return false
    return row.some((value: any, index: number) => {
      if (index === 0) return false
      return !relationsType.validateValue(value)
    })
  })
  if (result) {
    errors.push("Some values are specified incorrectly")
  }
}

export const replaceEmptyValues = (data: Array<unknown>) => {
  return data.map((row: any) => {
    return row.map((value: any) => {
      if (value === null) return undefined
      return value
    })
  });
};