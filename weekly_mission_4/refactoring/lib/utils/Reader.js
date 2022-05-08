const fs = require("fs");

module.exports = class Reader {
    static readJsonFile(file_path){
        const rawdata = fs.readFileSync("explorers.json")
        return JSON.parse(rawdata)
    }
}