import { username, scores, add, greet, type User } from "./user.js";
console.log(username);
console.log(scores);
console.log(add(5, 3));
const user: User = {name:"Bob",age:25};
console.log(greet(user));