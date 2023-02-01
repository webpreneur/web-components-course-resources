The comma operator in JavaScript allows you to evaluate multiple expressions and return the value of the last expression. 

```js
    // This function takes a number as an argument, 
    // adds 4 to it, multiplies it by 2, subtracts 5 from it, and then returns the result. 
    // Therefore, if the argument is 10, the function would return 19.
    const transform = num => (num+=4, num*=2, num-=5, num);
```
