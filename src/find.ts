import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   const getAllPosts = await prisma.post.findMany();

  //   const findFirstPost = await prisma.post.findFirst({
  //     where: {
  //       published: false,
  //     },
  //   });

  const findUniquePost = await prisma.post.findUniqueOrThrow({
    where: {
      id: 10,
    },
    select: {
      title: true,
      authorName: true,
    },
  });
  console.log({ findUniquePost });
};

main();
