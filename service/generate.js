const types = ['string', 'email', 'number', 'date', 'boolean'];
const strings = ['lorem', 'ipsum', 'dolar', 'set', 'amit'];
const emailEnds = ['com', 'co.uk', 'io'];

const randEl = arr => arr[Math.floor(Math.random() * arr.length)];

const number = () => Math.floor(Math.random() * 100);
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
  let constructObj = {};

  Object.keys(obj).forEach(el => {
    if (obj[el] === 'string') {
      constructObj[el] = randEl(strings);
    }
    if (obj[el] === 'email') {
      constructObj[el] = email();
    }
    if (obj[el] === 'number') {
      constructObj[el] = number();
    }
    if (obj[el] === 'date') {
      constructObj[el] = date();
    }
    if (obj[el] === 'boolean') {
      constructObj[el] = boolean();
    }
  });

  return constructObj;
};

module.exports = generate = (schema, quantity = 1) => {
  if (!schema) throw new Error('Schema must be provided');

  validateSchema(schema);

  const data = [];

  for (let i = 0; i < quantity; i++) {
    data.push(buildObj(schema));
  }

  return data;
};
