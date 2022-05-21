const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

(async function main() {
    try {
        await prisma.missionCommander.upsert({
            where: { name: 'Roberto'},
            update: {},
            create: {
                name: 'Roberto',
                username: "master",
                mainStack: "MERN",
                currentEnrollment: true,
            }
        });

        console.log('Create 1 register');
    } catch(e){
        console.error(e)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
})()