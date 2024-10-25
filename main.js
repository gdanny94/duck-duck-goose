function duckDuckGoose(players, position) {
    //use modulous to cycle thru players
    const index = (position -1) % players.length
    //return name of player from index 
    return players[index].name
  
  }
  

  // Example usage:
const a = { name: "Alice" };
const b = { name: "Bob" };
const c = { name: "Charlie" };
const d = { name: "Diana" };

console.log(duck_duck_goose([a, b, c, d], 1));  // Output: "Alice"
console.log(duck_duck_goose([a, b, c, d], 5));  // Output: "Alice"
console.log(duck_duck_goose([a, b, c, d], 4));  // Output: "Diana"