const { PythonShell } = require("python-shell");
const path = require("path");

const runPythonScript = (scriptName, args = []) => {
    console.log("in runPythonScript");

    return new Promise((resolve, reject) => {
        let options = {
            mode: "text",
            pythonOptions: ["-u"], 
            scriptPath: path.resolve("python"),
            args: args,
        };

        PythonShell.run(scriptName, options, (err, results) => {
            if (err) {
                console.error("Python Error:", err);
                return reject(err);
            }
            
            console.log("Python Output:", results ? results.join("\n") : "");
            resolve(results ? results.join("\n") : "");
        });

        console.log("after runPythonScript");
    });
};

module.exports = { runPythonScript };
