const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function testConnection() {
    try {
      const users = await prisma.user.findMany(); // Assuming you have a 'user' table
      console.log('Successfully connected to the database', users);
    } catch (error) {
      console.error('Error connecting to the database', error);
    } finally {
      await prisma.$disconnect();
    }
  }

  testConnection();

module.exports = prisma;