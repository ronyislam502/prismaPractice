import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  const offsetPagination = await prisma.post.findMany({
    skip: 5,
    take: 5,
  });

  //   console.log("offset", offsetPagination);

  //   cursor pagination
  const cursorPagination = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  });

  console.log("cursor", cursorPagination);

  //   sorting
  const sorting = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
  });
  console.log("sorting", sorting);
};
paginationSorting();
