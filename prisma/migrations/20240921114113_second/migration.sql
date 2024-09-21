/*
  Warnings:

  - You are about to drop the column `description` on the `Actualite` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Actualite` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Organisation` table. All the data in the column will be lost.
  - Added the required column `label` to the `Actualite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Organisation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Actualite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_Actualite" ("date", "id", "img") SELECT "date", "id", "img" FROM "Actualite";
DROP TABLE "Actualite";
ALTER TABLE "new_Actualite" RENAME TO "Actualite";
CREATE TABLE "new_Organisation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "img" TEXT NOT NULL
);
INSERT INTO "new_Organisation" ("id", "img") SELECT "id", "img" FROM "Organisation";
DROP TABLE "Organisation";
ALTER TABLE "new_Organisation" RENAME TO "Organisation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
