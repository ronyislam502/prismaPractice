import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const deletePost = await prisma.post.delete({
    where: {
      id: 8,
    },
  });

  const deleteMany = await prisma.post.deleteMany({
    where: {
      title: "test title 2",
    },
  });

  console.log(deleteMany);
};

main();
