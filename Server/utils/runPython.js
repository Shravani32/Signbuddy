const { PythonShell } = require("python-shell");
const path = require("path");

const runPythonScript = (scriptName, args = []) => {
    return new Promise((resolve, reject) => {
        let options = {
            mode: "text",
            pythonOptions: ["-u"],
            scriptPath: path.resolve("python"),
            args: args,
        };

        PythonShell.run(scriptName, options, (err, results) => {
            if (err) reject(err);
            resolve(results ? results.join("\n") : "");
        });
    });
};

module.exports = { runPythonScript };
