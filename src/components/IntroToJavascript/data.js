const primitiveData = [
  {
    id: 1,
    title: "Number",
    info: "Represents both integers and floating-point numbers.",
    example: "let age = 25;",
  },
  {
    id: 2,
    title: "String",
    info: `Represents sequences of characters enclosed in single ('') or double (" ") quotes.`,
    example: `let name = "John";`,
  },
  {
    id: 3,
    title: "Undefined",
    info: `Represents a variable that has been declared but hasn't been assigned a value yet.`,
    example: `let salary;
    `,
  },
  {
    id: 4,
    title: "Null",
    info: `Represents the intentional absence of any value or object. It's often used to indicate an empty or non-existent value.`,
    example: `let data = null
    `,
  },
  {
    id: 5,
    title: "Symbol",
    info: `Introduced in ECMAScript 6, symbols are unique and immutable values, often used as keys for object properties.`,
    example: `const uniqueKey = Symbol("description");
    `,
  },
  {
    id: 5,
    title: "Date",
    info: `Introduced in ECMAScript 6, symbols are unique and immutable values, often used as keys for object properties.`,
    example: `const uniqueKey = Symbol("description");
    `,
  },
];

export default primitiveData;
