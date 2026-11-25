const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Data received"), 2000));
fetchData().then(data => console.log("Using .then():", data));
const getData = async () => {
    const data = await fetchData();
    console.log("Using async/await:", data);
};
getData();