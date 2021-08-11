const types = ['string', 'email', 'number', 'date', 'boolean'];
const defaultSchema = {
  firstName: 'string',
  lastName: 'string',
  age: 'number',
  birthday: 'date',
  boolean: 'boolean',
  email: 'email',
};

const strings = ['lorem', 'ipsum', 'dolar', 'set', 'amit'];
const emailEnds = ['com', 'co.uk', 'io'];

const randEl = arr => arr[Math.floor(Math.random() * arr.length)];

const number = () => Math.floor(Math.random()) * 100;
const boolean = () => Math.random() < 0.5;
const date = () => new Date();
const email = () =>
  `${randEl(strings)}@${randEl(strings)}.${randEl(emailEnds)}`;

const validateSchema = schema => {
  Object.values(schema).map(val => {
    if (!types.includes(val)) {
      throw new Error(
        `Invalid data type given, must be one of: ${types.join(', ')}`,
      );
    }
  });
};

const buildObj = obj => {
  const keys = Object.keys(obj);
  let builtObj = {};

  keys.forEach(el => {
    if (obj[el] === 'string') {
      builtObj[el] = randEl(strings);
    }
    if (obj[el] === 'email') {
      builtObj[el] = email();
    }
    if (obj[el] === 'number') {
      builtObj[el] = number();
    }
    if (obj[el] === 'date') {
      builtObj[el] = date();
    }
    if (obj[el] === 'boolean') {
      builtObj[el] = boolean();
    }
  });

  return builtObj;
};

module.exports = generate = (schema, quantity = 1) => {
  validateSchema(schema);
  const data = [];

  for (let i = 0; i < quantity; i++) {
    data.push(buildObj(schema));
  }

  return data;
};
