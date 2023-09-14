import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import ProductPrice from "@/components/common/ProductPrice";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start aspect-auto"
    >
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-[3/4] mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={data.srcUrl}
          width={600}
          height={800}
          className="rounded-md w-full h-full object-cover object-top hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
      </div>
      <strong className="text-black xl:text-xl">{data.title}</strong>
      <div className="flex items-end mb-1 xl:mb-2">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
          {data.rating.toFixed(1)}
          <span className="text-black/60">/5</span>
        </span>
      </div>
      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        <ProductPrice price={data.price} discount={data.discount} />
      </div>
    </Link>
  );
};

export default ProductCard;
