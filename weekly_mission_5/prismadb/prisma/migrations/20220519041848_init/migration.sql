/*
  Warnings:

  - You are about to drop the column `azureCertification` on the `Register` table. All the data in the column will be lost.
  - You are about to drop the column `dateCreated` on the `Register` table. All the data in the column will be lost.
  - You are about to drop the column `lastUpdated` on the `Register` table. All the data in the column will be lost.
  - You are about to drop the column `mission` on the `Register` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Register` table. All the data in the column will be lost.
  - Added the required column `lang` to the `Register` table without a default value. This is not possible if the table is not empty.
  - Added the required column `missionCommander` to the `Register` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Register" DROP COLUMN "azureCertification",
DROP COLUMN "dateCreated",
DROP COLUMN "lastUpdated",
DROP COLUMN "mission",
DROP COLUMN "username",
ADD COLUMN     "enrollments" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "hasCetification" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lang" VARCHAR(255) NOT NULL,
ADD COLUMN     "missionCommander" VARCHAR(255) NOT NULL;
