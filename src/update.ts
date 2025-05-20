import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("prisma");
  const singleUpdate = await prisma.post.update({
    where: {
      id: 8,
    },
    data: {
      title: "test title 8",
      content: "test content 8",
      authorName: "Rooney 8",
    },
  });
  console.log(singleUpdate);

  const updateMany = await prisma.post.updateMany({
    where: {
      id: {
        in: [2, 3, 4],
      },
    },
    data: {
      published: true,
    },
  });
  console.log(updateMany);

  const updateManyTitle = await prisma.post.updateMany({
    where: {
      title: "test title 3",
    },
    data: {
      published: true,
    },
  });
  console.log(updateManyTitle);
};

main();
