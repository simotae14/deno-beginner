const food = Deno.args[0];
const parent = Deno.args[1];
if (food === "love" && parent === "ryan") {
  console.log("🦕...Deno is born!");
} else {
  console.log("🥚...this egg needs some love");
}

// run with
// deno run 04_deno_exercise.js "love" "simo"
// or
// deno run 04_deno_exercise.js "love" "ryan"
