module.exports = class ExplorerService{
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getExplorersUsernamesByMission(explorers, mission){
        return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername);
    }
}