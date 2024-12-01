import bcrypt from "bcrypt";
// create a new user seed

import { prisma } from "@/util/prisma";

async function main() {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: "admin@example.com",
    },
  });
  if (existingUser) {
    await prisma.user.delete({
      where: {
        id: existingUser.id,
      },
    });
  }
  const password = await bcrypt.hash("securepassword", 10);
  await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      role: "ADMIN",
      password: password,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
