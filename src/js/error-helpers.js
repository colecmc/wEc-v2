function validateParam(param) {
  if (typeof param[0] !== param[1]) {
    throw new Error(`${param[0]} must be a ${param[1]}.`);
  }

  return true;
}


export const validateParamString = param => validateParam([param, 'string']);

export const validateParamFunction = param => validateParam([param, 'function']);

export const validateParamNumber = param => validateParam([param, 'number']);
