import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("prisma");
  const result = await prisma.post.create({
    data: {
      title: "test title 3",
      content: "test content 4",
      authorName: "Rooney 2",
    },
  });
  console.log(result);
};

main();
