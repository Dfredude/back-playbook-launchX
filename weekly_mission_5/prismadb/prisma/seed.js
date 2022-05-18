const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

(async function main() {
    try {
        const woopa4 = await prisma.explorer.upsert({
            where: { name: 'Woopa 4'},
            update: {},
            create: {
                name: 'Woopa 4',
                username: 'ajolonauta4',
                mission: 'Python'
            }
        })

        console.log('Create 1 explorer');
    } catch(e){
        console.error(e)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
})()