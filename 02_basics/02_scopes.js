// let a=10
// const b=20
// var c=30
// console.log(a,b,c)

let a=100;
if(true){
    let a=100
    const b=200
    var c=300
   console.log(a,b,c)
}

console.log(a);

// ## Global scope: Browser vs Node

// - Browser global object: `window` (also `globalThis`)
// - Node global object: `global` (also `globalThis`)

// ### Key differences

// - In the browser console, the top-level global scope is the page/window scope.
//   - `window` contains DOM APIs like `document`, `location`, `fetch`, `localStorage`.
//   - `var x = 1` at top-level becomes `window.x = 1`.
//   - `let` / `const` do not become properties of `window`.

// - In Node, the top-level scope of a file is not the global object.
//   - Each file is a module scope.
//   - `var`, `let`, `const` at top-level stay local to that module.
//   - To access the true global object, use `global` or `globalThis`.
//   - Node globals include `process`, `module`, `exports`, `__dirname`, `__filename`, `require`.

// ### Practical difference

// - Browser inspect console: you are often working in a real global scope tied to the page.
// - Node script: your file runs inside a module, so top-level variables are not automatically global.

// ### Summary

// - Browser global = `window`; Node global = `global`
// - Browser console top-level behaves like global scope
// - Node file top-level behaves like module scope
// - Use `globalThis` when you need a universal reference across environments




//nested scope example
function outer(){
    let a=10
    function inner(){
        let b=20
        console.log(a,b)
    }
    //console.log(b) // this is an error because b is not defined in this scope
    inner()
}
outer()

// ## What happens in that code

// When you call `outer()`:

// 1. `outer` starts running.
// 2. `let a = 10` creates `a` inside `outer`.
// 3. `function inner() { ... }` defines `inner` inside `outer`.
// 4. `inner()` is called.

// At that point, JavaScript pauses `outer` and runs `inner`.

// Inside `inner()`:

// - `let b = 20` creates `b` inside `inner`.
// - `console.log(a, b)` prints `10 20`.
// - `inner` returns.

// Then `outer` continues and finishes.

// ### Key point

// - `outer` begins first.
// - `inner` runs when `outer` calls it.
// - `outer` does not finish until `inner` returns.
// - `b` is only defined inside `inner`, so `console.log(b)` inside `outer` would cause an error.

// ### Why `inner` can use `a`

// Because `inner` is nested inside `outer`, it can access `outer`’s `a` via scope/closure.

// So the real order is:

// - `outer` starts
// - `inner` runs
// - `outer` resumes and ends







//CLOSURE EXAMPLE

// ## What is a closure?

// A closure is when a function remembers the variables from the scope where it was created, even after that outer scope has finished running.

// ### Key idea

// - When a function is defined inside another function, the inner function keeps access to the outer function’s variables.
// - That access remains available whenever the inner function is later called.

// ### Example

// ```js
// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// const fn = outer();
// fn(); // prints 10
// ```

// ### Why this is a closure

// - `outer()` finishes and returns `inner`
// - `a` is still available to `inner`
// - `inner` closes over the variable `a`

// ### Practical meaning

// - Closures let inner functions keep state from their containing scope.
// - They are often used for:
//   - data privacy
//   - factory functions
//   - callbacks that need access to earlier variables

// ### Short summary

// - Closure = function + preserved surrounding scope
// - Inner function can access outer variables even after outer has returned
// - This is one of the most important features of JavaScript scope and functions