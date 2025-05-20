import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("prisma");
  const upsertData = await prisma.post.upsert({
    where: {
      id: 10,
    },
    update: {
      title: "test title 10",
      content: "test content 10",
      authorName: "Rooney 10",
    },
    create: {
      title: "title 2",
      content: "content 2",
    },
  });
  console.log(upsertData);
};

main();
