# Core Types 

## Number
    - 1, 5.3, -10 
      - All numbers, no differentiation between integers or floats 

## Strings
    - 'Hi' , "Hi" `Hi`
      - All text values 
  

  ## Boolean
    - true, false
      - Just two -
        - no "truthy" or "falsy" values

## Object
    - {age: 30}
      - Any Javascript object, more specific types (types of object) are possible


Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

```
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
````

This would be the type of such an object:

````
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
````
So you have an object type in an object type so to say.

## Array
    - [1,2,3]
      - Any JavaScript array, type can be flexible or strict (regarding the element types)


- Typescript is great because it helps you during development
  
- The key difference is: 
  - JavaScript uses "dynamic types" (Resolved at runtime)
  - Typescript uses "static types" (set during development)
    - These logic are only executed during development



--------------
# Important Type Casing
- In typescript, you work with types like  "string" or "number" all the times.  The core primitives types in Typescript are allow *lowercase!*

In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation. For example, in this code

```
let x = 3;
let x: number
```

The type of the x variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.

In most cases, type inference is straightforward. In the following sections, we’ll explore some of the nuances in how types are inferred.

- Typescript types are checked during compilation, Javascript types during runtime.
    JS has no compilation step but at runtime, you can check for certain types (e.g. in if conditions). TS on the other hand allows you to catch certain errors during development since it checks types during compilation as well.

## Tuple
    - [1, 2]
      - Added by typescript- Fixed-length array

## Tuple
    - enum {NEW, OLD}
      - Added by typescript- Automatically enumerated global constant  identifiers
