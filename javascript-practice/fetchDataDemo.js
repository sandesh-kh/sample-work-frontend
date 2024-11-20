function fetchDataDemo() {
    console.log("=== Fetching Data from API Using Promises ===");

    /**
     * 1. Fetching Data with fetch()
     * The `fetch()` method returns a promise.
     */
    console.log("\n=== Basic Fetch Example ===");

    const apiURL = "https://jsonplaceholder.typicode.com/posts";

    fetch(apiURL)
        .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then((data) => {
            console.log("Fetched Data:", data.slice(0, 5)); // Display first 5 posts
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    /**
     * 2. Fetching Data with Custom Function
     * Encapsulating `fetch` in a reusable function.
     */
    console.log("\n=== Reusable Fetch Function ===");

    function fetchData(url) {
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }

    fetchData("https://jsonplaceholder.typicode.com/users")
        .then((users) => {
            console.log("Fetched Users:", users.slice(0, 3)); // Display first 3 users
        })
        .catch((error) => {
            console.error("Error fetching users:", error);
        });

    /**
     * 3. Handling Multiple API Calls Simultaneously
     * Using `Promise.all` to fetch from multiple endpoints.
     */
    console.log("\n=== Fetching Data from Multiple APIs ===");

    const postsURL = "https://jsonplaceholder.typicode.com/posts";
    const usersURL = "https://jsonplaceholder.typicode.com/users";

    Promise.all([fetchData(postsURL), fetchData(usersURL)])
        .then(([posts, users]) => {
            console.log("Posts (first 3):", posts.slice(0, 3));
            console.log("Users (first 3):", users.slice(0, 3));
        })
        .catch((error) => {
            console.error("Error fetching data from APIs:", error);
        });

    /**
     * 4. Simulating a Loading State
     * Show a loading message while waiting for the data.
     */
    console.log("\n=== Simulating Loading State ===");

    console.log("Loading data...");
    fetchData(apiURL)
        .then((data) => {
            console.log("Data Loaded Successfully:", data.slice(0, 3));
        })
        .catch((error) => {
            console.error("Error during data fetch:", error);
        })
        .finally(() => {
            console.log("Loading complete.");
        });
}

fetchDataDemo();
