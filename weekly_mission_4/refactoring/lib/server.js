const express = require("express")
const app = express()
app.use(express.json())
const port = 3000
app.get("/", (req, res)=> {
    res.send("Hello World")
})

app.get("/v1/explorers/:mission", (req, res)=>{
    const mission = req.params.mission
    const ExplorerController = require("./controllers/ExplorerController")
    res.send(ExplorerController.getExplorersByMission(mission))
})

app.get("/v1/explorers/amount/:mission", (req, res)=> {
    const mission = req.params.mission
    const ExplorerController = require("./controllers/ExplorerController")
    res.json({ 
        mission: mission,
        amount: ExplorerController.getExplorersAmountByMission(mission)
     })
})

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission
    const ExplorerController = require("./controllers/ExplorerController")
    res.send(ExplorerController.getExplorersUsernamesByMission(mission))
    
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})