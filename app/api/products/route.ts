import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET ALL PRODUCTS
export async function GET(request: Request) {
  const products = await prisma.product.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(products);
}

// =========== Création des produits sur stripe via database =========== //
// export async function GET(request: Request) {
//   const products = await prisma.product.findMany();
//   for (let i = 0; i < products.length; i++) {
//     await stripe.products.create({
//       name: products[i].title,
//       images: [products[i].image],
//       default_price_data: {
//         currency: "eur",
//         unit_amount: products[i].price * 100,
//       },
//     });
//   }
//   return NextResponse.json({ message: "Products added to Stripe" });
// }
// ==================================================================== //

// =========== Mise à plat de l'api dummy JSON =========== //
// export async function GET(request: Request) {
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();

//   try {
//     console.log("Creating products...");
//     for (let i = 0; i < data.products.length; i++) {
//       const products = await prisma.product.createMany({
//         data: {
//           id: data.products[i].id,
//           title: data.products[i].title,
//           price: data.products[i].price,
//           description: data.products[i].description,
//           image: data.products[i].images[0],
//           brand: data.products[i].brand,
//           category: data.products[i].category,
//           rating: data.products[i].rating,
//           discountPercentage: data.products[i].discountPercentage,
//           stock: data.products[i].stock,
//           thumbnail: data.products[i].thumbnail,
//         },
//         skipDuplicates: true,
//       });
//     }

//     console.log("Products created successfully");
//   } catch (error) {
//     console.log("Error when creating products");
//     console.log(error);
//   }

//   return NextResponse.json(data.products);
// }

// ======================================================= //
