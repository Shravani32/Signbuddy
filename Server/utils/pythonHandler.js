const { PythonShell } = require("python-shell");

async function processMessage(inputType, message) {
    return new Promise((resolve, reject) => {
        let options = {
            mode: "text",
            pythonOptions: ["-u"],
            scriptPath: "./python",
            args: [inputType, message]
        };

        PythonShell.run("../python/sign_language.py", options, (err, results) => {
            if (err) reject(err);
            resolve(results ? results[0] : "Error processing message");
        });
    });
}

module.exports = { processMessage };
