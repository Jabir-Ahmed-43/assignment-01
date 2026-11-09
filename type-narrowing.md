# Type Narrowing in TypeScript

## Introduction

In TypeScript, sometimes one variable can hold more than one type, like `string | number | boolean`. This is very helpful, but we cannot directly use string methods like `.trim()` on it because TypeScript is not sure what the value will be at runtime. Checking and making a broad union type into one specific type is called **Type Narrowing**.

## Practical Examples with `typeof`, `instanceof`, and `in`

For basic types like string, number, or boolean, we use the `typeof` operator inside an `if-else` block. TypeScript follows our condition and narrows the type automatically.

```ts
function processInput(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.trim().toLowerCase(); // Narrowed to string
  } else if (typeof value === "number") {
    return value * 10; // Narrowed to number
  } else {
    return value ? "Active" : "Inactive"; // Narrowed to boolean
  }
}
```

When we work with classes like `Employee` and `Manager`, `typeof` only says `"object"`. So here we use instanceof to check if an object belongs to a specific class.

```ts
function printWorkerInfo(worker: Employee | Manager) {
  if (worker instanceof Manager) {
    return worker.getRoleInfo(); // Narrowed to Manager class
  }
  return worker.getDetails(); // Narrowed to Employee class
}
```

When we work with plain objects or interfaces without classes, we can use the `in` operator to check if a specific property name exists inside the object.

```ts
type User = { id: number; name: string; role: string };

function checkItem(item: Course | User) {
  if ("isPublished" in item) {
    return item.title; // Narrowed to Course
  }
  return item.role; // Narrowed to User
}
```

## Conclusion

Type narrowing helps us write safe code when working with multiple types. By using `typeof` for primitive values, `instanceof` for classes, and in for objects, we can easily avoid runtime errors in our TypeScript projects.
