const express = require("express")
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.get('/', (req, res)=> {
    res.json({message: 'alive'})
})

app.get('/explorers', async (req, res)=>{
    const allExplorers = await prisma.explorer.findMany({})
    res.json(allExplorers)
})

app.get('/explorers/:id', async (req, res)=> {
    const id = req.params.id
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}})
    res.json(explorer)
})

app.post('/explorers', async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission:    req.body.mission
    }
    const message = "Explorer creado!"
    await prisma.explorer.create({data: explorer})
    return res.json({message})
})

app.put('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    })
    return res.json({ message: "Actualizado Correctamente"})
})

app.delete('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.explorer.delete({where: {id: id}})
    return res.json({message: "Eliminado correctamente"})
})

//Registers start here

app.get('/registers', async (req, res)=> {
    const allRegisters = await prisma.register.findMany({})
    res.json(allRegisters)
})

app.get('/registers/:id', async (req, res)=> {
    const id = req.params.id
    const register = await prisma.register.findUnique({where: { id: parseInt(id)}})
    res.json(register)
})

app.post('/registers', async (req, res)=> {
    const register = { 
        name : req.body.name,
        lang : req.body.lang,
        missionCommander: req.body.missionCommander,
        enrollments: req.body.enrollments,
        hasCertification: req.body.hasCertification
    }
    const message = "Register created" 
    await prisma.register.create({ data: register})
    res.json({ message })
})

app.put('/registers/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const message = "Updated register!"
    await prisma.register.update({
        where: {
            id: id
        },
        data: {
            lang: req.body.lang
        }
    })
    res.json({message})

})

app.delete('/registers/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.register.delete({where: {id: id}})
    return res.json({message: "Eliminado correctamente"})
})

//Commanders start here

app.get('/commanders', async (req, res)=>{
    const allCommanders = await prisma.missionCommander.findMany({})
    res.json(allCommanders)
})

app.get('/commanders/:id', async (req, res)=> {
    const id = req.params.id
    const commander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}})
    res.json(commander)
})

app.post('/commanders', async (req, res) => {
    const commander = {
        name: req.body.name,
        username: req.body.username,
        mainStack: req.body.mainStack
    }
    const message = "Commander creado!"
    await prisma.missionCommander.create({data: commander})
    return res.json({message})
})

app.put('/commanders/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.missionCommander.update({
        where: {
            id: id
        },
        data: {
            mainStack: req.body.mainStack
        }
    })
    return res.json({ message: "Actualizado Correctamente"})
})

app.delete('/commanders/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.missionCommander.delete({where: {id: id}})
    return res.json({message: "Eliminado correctamente"})
})

app.listen(port, ()=> {
    console.log(`Listening to requests on port ${port}`);
})