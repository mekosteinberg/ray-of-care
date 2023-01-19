/*
  Warnings:

  - You are about to drop the column `notes` on the `Client` table. All the data in the column will be lost.
  - Added the required column `gender` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClientGender" AS ENUM ('male', 'female', 'other');

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "notes",
ADD COLUMN     "gender" TEXT NOT NULL;
