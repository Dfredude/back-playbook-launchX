module.exports = class ExplorerService{
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission === mission)
    }
    static filterExplorersUsernamesByMission(explorers, mission){
        return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername)
    }

    static getExplorersByMission(mission){
        const Reader = require("../utils/Reader")
        const explorers = Reader.readJsonFile("explorers.json")
        return this.filterByMission(explorers, mission)
    }

    static getExplorersUsernamesByMission(mission){
        const Reader = require("../utils/Reader")
        const explorers = Reader.readJsonFile("explorers.json")
        return this.filterExplorersUsernamesByMission(explorers, mission)
    }

    static getAmountByMission(mission){
        const Reader = require("../utils/Reader")
        const explorers = Reader.readJsonFile("explorers.json")
        return this.filterByMission(explorers, mission).length
    }
}