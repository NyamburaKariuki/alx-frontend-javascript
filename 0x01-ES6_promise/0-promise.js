function APIHandler() {}

APIHandler.prototype.getResponseFromAPI = function() {
    return new Promise((resolve, reject) => {
        // Simulate an API call
        setTimeout(() => {
            const success = true; // Change this to simulate success or failure
            if (success) {
                resolve("API call successful");
            } else {
                reject("API call failed");
            }
        }, 2000); // Simulate a 2-second delay for the API call
    });
};
