const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   
const issue = {
  title: "Error",
  repositoryNameAssociated:  "LaunchX",
  status: "OK",
  numberOfComments: 4,
  labels: "nice",
  author: "dfredude",
  dateCreated: "25-04-2022",
  lastUpdated: "25-04-2022",
  getTitleAndAuthor() {
    return [this.title, this.author]
  },
  getGeneralInfo() {
    return this.status
  }
}

const pullRequest = {
  title: "random",
  branchName: "info",
  dateCreated: "info",
  status: "info",
  repositoryNameAssociated: "info",
  getStatus() {
    return this.status
  },
  getTitleAndAuthor(){
    return [this.title, this.author]
  }
}