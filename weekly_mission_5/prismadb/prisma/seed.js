const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa4 = await prisma.register.upsert({
            where: { name: 'MyRegister'},
            update: {},
            create: {
                name: 'MyRegister',
                lang: "Spanish",
                missionCommander: "Somebody",
                enrollments: 8,
                hasCertification: true
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