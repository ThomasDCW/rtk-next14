const { PrismaClient } = require("@prisma/client");
const partsData = require("./data/parts.json");

const prisma = new PrismaClient();

async function main() {
  for (const part of partsData) {
    const firstRegistrationDateFormated = part.firstRegistrationDate.replace(
      /(\d{4})(\d{2})(\d{2})/,
      "$1-$2-$3"
    );
    await prisma.part.upsert({
      where: { id: part._id },
      update: {
        code: part.code,
        label: part.label,
        quality: part.quality,
        year: parseInt(part.year),
        CNIT: part.CNIT,
        description: part.description,
        OERef: part.OERef,
        comments: part.comments,
        engineType: part.engineType,
        engineCode: part.engineCode,
        boxType: part.boxType,
        boxCode: part.boxCode,
        autoManu: part.autoManu,
        storage: part.storage,
        dismantled: part.dismantled === "1",
        barcode: part.barcode,
        images: part.images,
        exVatPrice: part.exVatPrice,
        exVatShippingCost: part.exVatShippingCost,
        shippingCostCategory: part.shippingCostCategory,
        brand: part.brand,
        model: part.model,
        phase: part.phase,
        version: part.version,
        energy: part.energy,
        power: part.power,
        DINPower: part.DINPower,
        mileage: part.mileage,
        color: part.color,
        policeNb: part.policeNb,
        doors: part.doors,
        engineSize: part.engineSize,
        firstRegistrationDate: new Date(firstRegistrationDateFormated),
        registration: part.registration,
        identifier: part.identifier,
        AMRef: part.AMRef,
        lueRef: part.lueRef,
        PRECode: part.PRECode,
        manufacturerPrice: part.manufacturerPrice,
        weight: part.weight,
        family: part.family,
        subFamily: part.subFamily,
        partType: part.partType,
        VIN: part.VIN,
        Ktype: part.Ktype,
        publishable: part.publishable,
        status: part.status,
        updatedRef: part.updatedRef,
        excluded: part.excluded ?? false,
      },
      create: {
        id: part._id,
        code: part.code,
        label: part.label,
        quality: part.quality,
        year: parseInt(part.year),
        CNIT: part.CNIT,
        description: part.description,
        OERef: part.OERef,
        comments: part.comments,
        engineType: part.engineType,
        engineCode: part.engineCode,
        boxType: part.boxType,
        boxCode: part.boxCode,
        autoManu: part.autoManu,
        storage: part.storage,
        dismantled: part.dismantled === "1",
        barcode: part.barcode,
        images: part.images,
        exVatPrice: part.exVatPrice,
        exVatShippingCost: part.exVatShippingCost,
        shippingCostCategory: part.shippingCostCategory,
        brand: part.brand,
        model: part.model,
        phase: part.phase,
        version: part.version,
        energy: part.energy,
        power: part.power,
        DINPower: part.DINPower,
        mileage: part.mileage,
        color: part.color,
        policeNb: part.policeNb,
        doors: part.doors,
        engineSize: part.engineSize,
        firstRegistrationDate: new Date(firstRegistrationDateFormated),
        registration: part.registration,
        identifier: part.identifier,
        AMRef: part.AMRef,
        lueRef: part.lueRef,
        PRECode: part.PRECode,
        manufacturerPrice: part.manufacturerPrice,
        weight: part.weight,
        family: part.family,
        subFamily: part.subFamily,
        partType: part.partType,
        VIN: part.VIN,
        Ktype: part.Ktype,
        publishable: part.publishable,
        status: part.status,
        updatedRef: part.updatedRef,
        excluded: part.excluded ?? false,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
