import Image from "next/image";
import Link from "next/link";
import React from "react";
import errorImg from "@/assets/error-404.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        {/* Decorative Element */}
        <figure className="flex justify-center items-center">
          <Image src={errorImg} width={400} height={400} alt="404 page"></Image>
        </figure>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#244D3F] sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 text-base leading-7 text-[#244d3fbb]">
          Sorry, we couldn’t find the page you’re looking for. It might have
          moved or disappeared into the digital void.
        </p>

        <div className="mt-4 flex items-center justify-center gap-x-6">
          <Link href="/" className="btn btn-primary">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
