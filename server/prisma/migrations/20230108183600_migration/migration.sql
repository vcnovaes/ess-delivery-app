-- CreateTable
CREATE TABLE "promotions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" INTEGER,
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

-- CreateTable
CREATE TABLE "promotions_types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_promotions_1" ON "promotions"("name");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_promotions_types_1" ON "promotions_types"("type");
Pragma writable_schema=0;
