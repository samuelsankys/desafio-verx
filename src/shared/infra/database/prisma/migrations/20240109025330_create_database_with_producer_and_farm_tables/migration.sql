-- CreateEnum
CREATE TYPE "PlantedCulture" AS ENUM ('SOY', 'CORN', 'COTTON', 'COFFEE', 'SUGAR_CANE');

-- CreateTable
CREATE TABLE "Producer" (
    "id" UUID NOT NULL,
    "name" VARCHAR(250) NOT NULL,
    "cpfCnpj" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farm" (
    "id" UUID NOT NULL,
    "name" VARCHAR(250) NOT NULL,
    "city" VARCHAR(20) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "totalAreaHec" DECIMAL(65,30) NOT NULL,
    "agricuturalAreaHec" DECIMAL(65,30) NOT NULL,
    "vegetationAreaHec" DECIMAL(65,30) NOT NULL,
    "plantedCulture" "PlantedCulture"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FarmToProducer" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Producer_cpfCnpj_key" ON "Producer"("cpfCnpj");

-- CreateIndex
CREATE UNIQUE INDEX "_FarmToProducer_AB_unique" ON "_FarmToProducer"("A", "B");

-- CreateIndex
CREATE INDEX "_FarmToProducer_B_index" ON "_FarmToProducer"("B");

-- AddForeignKey
ALTER TABLE "_FarmToProducer" ADD CONSTRAINT "_FarmToProducer_A_fkey" FOREIGN KEY ("A") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FarmToProducer" ADD CONSTRAINT "_FarmToProducer_B_fkey" FOREIGN KEY ("B") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
