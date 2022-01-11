export const createFormClassesObject: (arg0: { [index: string]: any }) => {
  [index: string]: boolean;
} = formObject =>
  Object.fromEntries(Object.keys(formObject).map(a => [a, false]));

export const confirmEntriesNotEmpty: (
  arg0: { [index: string]: any },
  arg1?: [string],
) => boolean = (formObject, exclude) => {
  return exclude !== undefined
    ? Object.entries(formObject)
        .filter(x => exclude.indexOf(x[0]) === -1)
        .every(x => x[1])
    : Object.values(formObject).every(Boolean);
};

export const validateEmail: (arg0: string) => boolean = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const markBadEmail: (
  arg0: string,
  arg1: { [index: string]: boolean },
) => void = (formEmailKey, formClasses) => {
  formClasses[formEmailKey] = true;
};

export const markEmptyEntries: (
  arg0: { [index: string]: any },
  arg1: { [index: string]: boolean },
  arg2?: [string],
) => void = (formObject, formClasses, exclude) => {
  for (const key in formObject) {
    if (formObject[key] === '') {
      if (!(exclude !== undefined && exclude.indexOf(key) !== -1))
        formClasses[key] = true;
    } else {
      formClasses[key] = false;
    }
  }
};
