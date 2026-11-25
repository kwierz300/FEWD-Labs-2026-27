const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));