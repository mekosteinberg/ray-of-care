/*
  Warnings:

  - The primary key for the `UserRoles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `roleId` on the `UserRoles` table. All the data in the column will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('guardian', 'caregiver', 'client', 'user');

-- DropForeignKey
ALTER TABLE "UserRoles" DROP CONSTRAINT "UserRoles_roleId_fkey";

-- AlterTable
ALTER TABLE "UserRoles" DROP CONSTRAINT "UserRoles_pkey",
DROP COLUMN "roleId",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'user',
ADD CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("userId", "role");

-- DropTable
DROP TABLE "Role";
