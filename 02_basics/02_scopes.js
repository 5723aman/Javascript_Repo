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