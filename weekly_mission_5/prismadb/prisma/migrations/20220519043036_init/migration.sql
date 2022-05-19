/*
  Warnings:

  - You are about to drop the column `hasCetification` on the `Register` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Register" DROP COLUMN "hasCetification",
ADD COLUMN     "hasCertification" BOOLEAN NOT NULL DEFAULT false;
