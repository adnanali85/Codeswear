import { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Image from "next/image";

const index = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="shadow-md">
      <header className="text-gray-600 body-font">
        <div className="container px-10 mx- flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <Link href={"/"}>
            <Image src="/image.jpg " alt="" height={100} width={200} />
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center md:text-md">
            <Link
              href={"/tshirt"}
              className="mr-5 hover:text-gray-900 font-bold "
            >
              Tshirts
            </Link>
            <Link
              href={"/hoodies"}
              className="mr-5 hover:text-gray-900 font-bold"
            >
              Hoodies
            </Link>
            <Link
              href={"/watches"}
              className="mr-5 hover:text-gray-900 font-bold"
            >
              Watches
            </Link>
            <Link href={"/mug"} className="mr-5 hover:text-gray-900 font-bold">
              Mugs
            </Link>
            <button
              onClick={toggleCart}
              className="absolute right-0 mx-9 top-4 text-xl hover:bg-gray-200 rounded  mt-3.5 md:mt-2 md:text-2xl"
            >
              <AiOutlineShoppingCart />
            </button>
          </nav>
        </div>
      </header>
      <div
        ref={ref}
        className="h-full sidebar absolute top-0 right-0 bg-pink-200 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl">Shoping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>

        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-3">
              <div className="mr-6 font-semibold">TShirts-Wear the code </div>
              <div className=" font-semibold flex items-center justify-center text-lg ">
                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="mr-6 font-semibold">TShirts-Wear the code </div>
              <div className=" font-semibold flex items-center justify-center text-lg ">
                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>          
        </ol>
      </div>
    </div>
  );
};

export default index;
