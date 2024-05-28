"use client";
import ShoppingCart from "@/app/components/ShoppingCart";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../services/products";
import { useRouter } from "next/navigation";
import AddToShoppingCartInput from "@/app/components/AddToShoppingCartInput";
import { ProductCard } from "@/app/components/Card";
import RenderStars from "@/app/components/RenderStars";
import Image from "next/image";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { data: products } = useGetProductsQuery({});
  console.log(products);

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(parseInt(params.slug));

  return (
    <main className="flex min-h-screen flex-col items-center">
      <button className="fixed top-5 left-5" onClick={() => router.back()}>
        <svg
          className="w-6 h-6 text-gray-800 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </button>
      <ShoppingCart />
      {isLoading && <p>Loading...</p>}
      {typeof error === "string" && <p>Error: {error}</p>}
      {product && (
        <section className="py-8 bg-white md:py-16  antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="max-w-md lg:max-w-lg mx-auto">
                <div id="product-1-tab-content">
                  <div
                    className="p-4 rounded-lg bg-white "
                    id="product-1-image-1"
                    role="tabpanel"
                    aria-labelledby="product-1-image-1-tab"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-full mx-auto"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-white "
                    id="product-1-image-2"
                    role="tabpanel"
                    aria-labelledby="product-1-image-2-tab"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-full mx-auto"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-white "
                    id="product-1-image-3"
                    role="tabpanel"
                    aria-labelledby="product-1-image-3-tab"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-full mx-auto"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-white "
                    id="product-1-image-4"
                    role="tabpanel"
                    aria-labelledby="product-1-image-4-tab"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-full mx-auto"
                      src={product.image}
                      alt=""
                    />
                  </div>
                </div>

                <ul
                  className="grid grid-cols-4 gap-4 mt-8"
                  id="product-1-tab"
                  product-tabs-toggle="#product-1-tab-content"
                  product-tabs-active="border-gray-200"
                  product-tabs-inactive="border-transparent hover:border-gray-200"
                  role="tablist"
                >
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-1-tab"
                      product-tabs-target="#product-1-image-1"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-1"
                      aria-selected="false"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                        src={product.image}
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-2-tab"
                      product-tabs-target="#product-1-image-2"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-2"
                      aria-selected="false"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                        src={product.image}
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-3-tab"
                      product-tabs-target="#product-1-image-3"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-3"
                      aria-selected="false"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                        src={product.image}
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-4-tab"
                      product-tabs-target="#product-1-image-4"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-4"
                      aria-selected="false"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                        src={product.image}
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-6 md:mt-0">
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                  {product.stock} in stock
                </span>
                <p className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl ">
                  {product.title}
                </p>
                <p className="mt-4 text-gray-700">{product.category}</p>
                <div className="mt-4 xl:items-center xl:gap-4 xl:flex">
                  <div className="flex items-center gap-2">
                    <RenderStars rating={product.rating} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 mt-6 sm:mt-8">
                  <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                    ${product?.price}
                  </p>
                  <form className="flex items-center gap-2 sm:hidden">
                    <div className="flex items-center gap-1">
                      <label
                        htmlFor="quantity"
                        className="text-sm font-medium text-gray-900 "
                      >
                        Quantity
                      </label>
                      <button
                        product-tooltip-target="quantity-desc-1"
                        product-tooltip-trigger="hover"
                        className="text-gray-400  hover:text-gray-900 "
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        id="quantity-desc-1"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
                      >
                        Quantity: Number of units to purchase.
                        <div
                          className="tooltip-arrow"
                          product-popper-arrow
                        ></div>
                      </div>
                    </div>
                    <select
                      id="quantity"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5"
                    >
                      <option selected>Choose quantity</option>
                      <option value="2" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </form>
                </div>

                <div className="mt-6 sm:gap-4 sm:flex sm:items-center sm:mt-8">
                  <div className="sm:gap-4 sm:items-center sm:flex">
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                      role="button"
                    >
                      <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      Add to favorites
                    </a>

                    <AddToShoppingCartInput
                      id={product.id}
                      price={product.price}
                      title={product.title}
                      image={product.image}
                    />
                  </div>

                  <form className="items-center hidden gap-2 sm:flex">
                    <div className="flex items-center gap-1">
                      <label
                        htmlFor="quantity"
                        className="text-sm font-medium text-gray-900 "
                      >
                        Quantity
                      </label>
                      <button
                        product-tooltip-target="quantity-desc-2"
                        product-tooltip-trigger="hover"
                        className="text-gray-400  hover:text-gray-900 "
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        id="quantity-desc-2"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
                      >
                        Quantity: Number of units to purchase.
                        <div
                          className="tooltip-arrow"
                          product-popper-arrow
                        ></div>
                      </div>
                    </div>
                    <select
                      id="quantity"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5      "
                    >
                      <option defaultValue={0}>0</option>
                      <option value="2" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </form>
                </div>

                <hr className="mt-6 border-gray-200 sm:mt-8" />
                <section>
                  <p className="mt-4 text-gray-700">{product.description}</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      )}
      <div className="p-16 flex flex-wrap justify-around">
        {products?.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
