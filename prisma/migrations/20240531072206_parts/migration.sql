-- CreateTable
CREATE TABLE "Part" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "quality" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "CNIT" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "OERef" TEXT NOT NULL,
    "comments" TEXT,
    "engineType" TEXT,
    "engineCode" TEXT,
    "boxType" TEXT,
    "boxCode" TEXT,
    "autoManu" TEXT,
    "storage" TEXT NOT NULL,
    "dismantled" BOOLEAN NOT NULL,
    "barcode" TEXT NOT NULL,
    "images" TEXT[],
    "exVatPrice" DOUBLE PRECISION NOT NULL,
    "exVatShippingCost" DOUBLE PRECISION NOT NULL,
    "shippingCostCategory" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "phase" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "energy" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "DINPower" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "policeNb" TEXT NOT NULL,
    "doors" INTEGER NOT NULL,
    "engineSize" INTEGER NOT NULL,
    "firstRegistrationDate" TIMESTAMP(3) NOT NULL,
    "registration" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "AMRef" TEXT,
    "lueRef" TEXT,
    "PRECode" TEXT,
    "manufacturerPrice" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "family" TEXT NOT NULL,
    "subFamily" TEXT NOT NULL,
    "partType" TEXT NOT NULL,
    "VIN" TEXT,
    "Ktype" TEXT,
    "publishable" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL,
    "updatedRef" TEXT,
    "excluded" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);