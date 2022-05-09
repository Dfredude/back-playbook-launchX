const fs = require("fs")

module.exports = class Reader {
    static readJsonFile(file_path){
        const rawdata = fs.readFileSync(file_path)
        return JSON.parse(rawdata)
    }
}