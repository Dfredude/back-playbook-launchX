const ExplorerService = require("../services/ExplorerService")
// const FizzBuzzService = require("../services/FizzBuzzService")

module.exports = class ExplorerController{
    static getExplorersByMission(mission){
        return ExplorerService.getExplorersByMission(mission)
    }

    static getExplorersAmountByMission(mission){
        return ExplorerService.getAmountByMission(mission)
    }

    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(mission)
    }
}