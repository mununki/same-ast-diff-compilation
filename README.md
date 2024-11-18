# PPX Spice Compilation Issue

The ppx_spice executable is a ppx file in the project root.

`src/b.res` is source code using ppx_spice, while `src/c.res` is source code without ppx_spice. `src/c.res` is manually written code that would be generated when using ppx_spice. Both modules have the same Spice module.

AST output of `src/b.res` file:
```
node_modules/rescript/cli/bsc -dparsetree -ppx "./ppx -uncurried" src/b.res &> b.txt
```

AST output of `src/c.res` file:
```
node_modules/rescript/cli/bsc -dparsetree -ppx "./ppx -uncurried" src/c.res &> c.txt
```

Comparing `b.txt` and `c.txt` files shows they are identical. However, when running the npm run res:build command, only b.res fails to compile.