"use client";
import ShoppingCart from "@/app/components/ShoppingCart";
import { useGetProductByIdQuery } from "../../services/products";
import { useRouter } from "next/navigation";
import AddToShoppingCartInput from "@/app/components/AddToShoppingCartInput";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { data, error, isLoading } = useGetProductByIdQuery(
    parseInt(params.slug)
  );
  console.log(data?.image);

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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </button>
      <ShoppingCart />
      {isLoading && <p>Loading...</p>}
      {typeof error === "string" && <p>Error: {error}</p>}
      {data && (
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
                    <img className="w-full mx-auto" src={data.image} alt="" />
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-white "
                    id="product-1-image-2"
                    role="tabpanel"
                    aria-labelledby="product-1-image-2-tab"
                  >
                    <img className="w-full mx-auto" src={data.image} alt="" />
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-white "
                    id="product-1-image-3"
                    role="tabpanel"
                    aria-labelledby="product-1-image-3-tab"
                  >
                    <img className="w-full mx-auto" src={data.image} alt="" />
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-white "
                    id="product-1-image-4"
                    role="tabpanel"
                    aria-labelledby="product-1-image-4-tab"
                  >
                    <img className="w-full mx-auto" src={data.image} alt="" />
                  </div>
                </div>

                <ul
                  className="grid grid-cols-4 gap-4 mt-8"
                  id="product-1-tab"
                  data-tabs-toggle="#product-1-tab-content"
                  data-tabs-active-classNamees="border-gray-200"
                  data-tabs-inactive-classNamees="border-transparent hover:border-gray-200"
                  role="tablist"
                >
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-1-tab"
                      data-tabs-target="#product-1-image-1"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-1"
                      aria-selected="false"
                    >
                      <img
                        className="object-contain w-full h-full"
                        src={data.image}
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-2-tab"
                      data-tabs-target="#product-1-image-2"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-2"
                      aria-selected="false"
                    >
                      <img
                        className="object-contain w-full h-full"
                        src={data.image}
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-3-tab"
                      data-tabs-target="#product-1-image-3"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-3"
                      aria-selected="false"
                    >
                      <img
                        className="object-contain w-full h-full"
                        src={data.image}
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
                      id="product-1-image-4-tab"
                      data-tabs-target="#product-1-image-4"
                      type="button"
                      role="tab"
                      aria-controls="product-1-image-4"
                      aria-selected="false"
                    >
                      <img
                        className="object-contain w-full h-full"
                        src={data.image}
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-6 md:mt-0">
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                  In stock
                </span>
                <p className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl ">
                  {data.title}
                </p>
                <div className="mt-4 xl:items-center xl:gap-4 xl:flex">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500">
                      (5.0)
                    </p>
                    <a
                      href="#"
                      className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline "
                    >
                      345 Reviews
                    </a>
                  </div>

                  <div className="flex items-center gap-1 mt-4 xl:mt-0">
                    <svg
                      className="w-5 h-5 text-blue-700 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-blue-700 ">
                      Deliver to Bonnie Green- Sacramento 23647
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-6 sm:mt-8">
                  <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                    ${data?.price}
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
                        data-tooltip-target="quantity-desc-1"
                        data-tooltip-trigger="hover"
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
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        id="quantity-desc-1"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
                      >
                        Quantity: Number of units to purchase.
                        <div className="tooltip-arrow" data-popper-arrow></div>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      Add to favorites
                    </a>

                    <AddToShoppingCartInput
                      id={data.id}
                      price={data.price}
                      title={data.title}
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
                        data-tooltip-target="quantity-desc-2"
                        data-tooltip-trigger="hover"
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
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        id="quantity-desc-2"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
                      >
                        Quantity: Number of units to purchase.
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                    <select
                      id="quantity"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5      "
                    >
                      <option selected>0</option>
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

                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 sm:mt-8 sm:gap-y-8">
                  <div>
                    <p className="text-base font-medium text-gray-900 ">
                      Colour
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <label htmlFor="green" className="relative block">
                        <input
                          type="radio"
                          name="colour"
                          id="green"
                          className="absolute appearance-none top-2 left-2 peer"
                        />
                        <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-700">
                          <p className="text-sm font-medium">Green</p>
                        </div>
                      </label>

                      <label htmlFor="pink" className="relative block">
                        <input
                          type="radio"
                          name="colour"
                          id="pink"
                          className="absolute appearance-none top-2 left-2 peer"
                        />
                        <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-700">
                          <p className="text-sm font-medium">Pink</p>
                        </div>
                      </label>

                      <label htmlFor="silver" className="relative block">
                        <input
                          type="radio"
                          name="colour"
                          id="silver"
                          className="absolute appearance-none top-2 left-2 peer"
                        />
                        <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-700">
                          <p className="text-sm font-medium">Silver</p>
                        </div>
                      </label>

                      <label htmlFor="blue" className="relative block">
                        <input
                          type="radio"
                          name="colour"
                          id="blue"
                          className="absolute appearance-none top-2 left-2 peer"
                        />
                        <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-700">
                          <p className="text-sm font-medium">Blue</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-base font-medium text-gray-900 ">
                      SSD capacity
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <label htmlFor="256gb" className="relative block">
                        <input
                          type="radio"
                          name="capacity"
                          id="256gb"
                          className="absolute appearance-none top-2 left-2 peer"
                        />
                        <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-700">
                          <p className="text-sm font-medium">256GB</p>
                        </div>
                      </label>

                      <label htmlFor="512gb" className="relative block">
                        <input
                          type="radio"
                          name="capacity"
                          id="512gb"
                          className="absolute appearance-none top-2 left-2 peer"
                        />
                        <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-700">
                          <p className="text-sm font-medium">512GB</p>
                        </div>
                      </label>

                      <label htmlFor="1tb" className="relative block">
                        <input
                          type="radio"
                          name="capacity"
                          id="1tb"
                          className="absolute appearance-none top-2 left-2 peer"
                        />
                        <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-700">
                          <p className="text-sm font-medium">1TB</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-base font-medium text-gray-900 ">
                      Pickup
                    </p>

                    <div className="flex flex-col gap-4 mt-2 sm:flex-row">
                      <div className="flex">
                        <div className="flex items-center h-5">
                          <input
                            id="shipping-checkbox"
                            aria-describedby="shipping-checkbox-text"
                            name="shipping"
                            type="radio"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500   focus:ring-2  "
                          />
                        </div>
                        <div className="text-sm ms-2">
                          <label
                            htmlFor="shipping-checkbox"
                            className="font-medium text-gray-900 "
                          >
                            Shipping - $19
                          </label>
                          <p
                            id="shipping-checkbox-text"
                            className="text-xs font-normal text-gray-500"
                          >
                            Arrives Nov 17
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex items-center h-5">
                          <input
                            id="pickup-checkbox"
                            aria-describedby="pickup-checkbox-text"
                            name="shipping"
                            type="radio"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500   focus:ring-2  "
                          />
                        </div>
                        <div className="text-sm ms-2">
                          <label
                            htmlFor="pickup-checkbox"
                            className="font-medium text-gray-900 "
                          >
                            Pickup from Flowbox- $9
                          </label>
                          <a
                            href="#"
                            title=""
                            id="pickup-checkbox-text"
                            className="block text-xs font-medium underline text-blue-700 hover:no-underline "
                          >
                            Pick a Flowbox near you
                          </a>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex items-center h-5">
                          <input
                            id="pickup-store-checkbox"
                            aria-describedby="pickup-store-checkbox-text"
                            name="shipping"
                            type="radio"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500   focus:ring-2  "
                            disabled
                          />
                        </div>
                        <div className="text-sm ms-2">
                          <label
                            htmlFor="pickup-store-checkbox"
                            className="font-medium text-gray-400 "
                          >
                            Pickup from our store
                          </label>
                          <p
                            id="pickup-store-checkbox-text"
                            className="text-xs font-normal text-gray-400 "
                          >
                            Not available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-base font-medium text-gray-900 ">
                      Add extra warranty
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex items-center">
                        <input
                          id="1-year"
                          name="warranty"
                          type="radio"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500   focus:ring-2  "
                        />
                        <label
                          htmlFor="1-year"
                          className="text-sm font-medium text-gray-900 ms-2 "
                        >
                          1 year - $39
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="2-years"
                          type="radio"
                          name="warranty"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500   focus:ring-2  "
                        />
                        <label
                          htmlFor="2-years"
                          className="text-sm font-medium text-gray-900 ms-2 "
                        >
                          2 years - $69
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="3-years"
                          type="radio"
                          name="warranty"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500   focus:ring-2  "
                        />
                        <label
                          htmlFor="3-years"
                          className="text-sm font-medium text-gray-900 ms-2 "
                        >
                          3 years - $991
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
