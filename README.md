# React Shared Library Example

An example for creating and using a react shared library.

We are tring to show that antd v4 is not working form shared project i.e - `shared-lib`.

## steps

1. npm install 
2. npm start from project folder. 

if we do direct import the component from antd v4 in `project` folder & Comment the shared component tag. it will not through any error.
but if we import antd component from shared-lib  `import SharedComp from "shared-lib/src/shared-comp";` it will through error if we use antd v4 component inside shared. 

you can also try by, uncommenting/commenting `Button` tag of antd v4 from `shared-comp.js` of `shared-lib`. 







