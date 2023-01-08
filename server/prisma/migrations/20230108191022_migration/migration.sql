/*
  Warnings:

  - Made the column `type` on table `promotions` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_promotions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "end_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "targets" TEXT NOT NULL,
    "discount_per_cent" REAL NOT NULL DEFAULT 0,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "discount_fixed" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "promotions_type_fkey" FOREIGN KEY ("type") REFERENCES "promotions_types" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_promotions" ("available", "description", "discount_fixed", "discount_per_cent", "end_date", "id", "name", "start_date", "targets", "type") SELECT "available", "description", "discount_fixed", "discount_per_cent", "end_date", "id", "name", "start_date", "targets", "type" FROM "promotions";
DROP TABLE "promotions";
ALTER TABLE "new_promotions" RENAME TO "promotions";
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_promotions_1" ON "promotions"("name");
Pragma writable_schema=0;
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
