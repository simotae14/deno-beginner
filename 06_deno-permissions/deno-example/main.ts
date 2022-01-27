console.log("Hello", Deno.env.get("USER"));
// to enable permission
// deno run --allow-env 06_deno-permissions/main.ts
// or
// deno run --allow-all 06_deno-permissions/main.ts
// or the shortcut
// deno run -A 06_deno-permissions/main.ts

// second option
// deno install --allow-env deno-example/main.ts
// and then run
// deno-example
