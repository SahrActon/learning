interface PassThrough {
  <T>(sideEffect: (value: T) => void, value: T): T;
}

/*
Also known as a 'tee' function.

https://learning.oreilly.com/library/view/domain-modeling-made/9781680505481/f_0101.xhtml#:-:text=Functions
https://davefancher.com/2015/01/11/extending-f-pipelines-with-a-tee-function/


Sometimes we want to execute a function that leads to a 'dead-end'.
If a function handles some I/O, writes to a store, emits an event, etc., we may not be interested in what it returns (if indeed it returns anything).
However, we may still want to be able to compose functions together via `.map`, and that means we need a return value.
The purpose of passThrough is to take a side effect function and value, execture a given sideEffect on it, then return the original value ('pass it through').
*/

const passThrough: PassThrough = (sideEffect, value) => {
  sideEffect(value);
  return value;
};

const value = 5;
const getValue = () => value;
const save = (value: number) => value;

const printValue = (value: number) => {
  console.log(value);
  return value;
};

// pass through method
const passThroughPrintValue = (value: number) => passThrough(printValue, value);

const doSomeOtherSideEffect = () => console.log("Some other stuff ");
const passThroughSideEffect = (value: number) =>
  passThrough(doSomeOtherSideEffect, value);

const saveValue = () => save(getValue());

save(getValue());

// save
const result = save(passThroughSideEffect(passThroughPrintValue(getValue())));

export { passThrough };
