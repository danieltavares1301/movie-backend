import prisma from '@prisma/client';

const prismaClient = new prisma.PrismaClient();

(async () => {
  try {
    await prismaClient.user.create({
      data: {
        name: 'Daniel',
        phone: '999999',
        birthDate: new Date(),
        country: 'Brasil',
        region: 'NORDESTE',
      },
    });
  } catch (error) {
    console.log(error);
  }
})();
