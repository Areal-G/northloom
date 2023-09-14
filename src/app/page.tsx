import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Ivory Down Puffer Jacket",
    srcUrl: "/images/products/ivory-puffer-1.jpg",
    gallery: ["/images/products/ivory-puffer-1.jpg", "/images/products/ivory-puffer-2.jpg", "/images/products/ivory-puffer-3.jpg"],
    price: 280,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Slate Oversized Suit",
    srcUrl: "/images/products/slate-oversized-suit-1.jpg",
    gallery: ["/images/products/slate-oversized-suit-1.jpg", "/images/products/slate-oversized-suit-2.jpg", "/images/products/slate-oversized-suit-3.jpg"],
    price: 520,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 3,
    title: "Taupe Knit Cardigan Dress",
    srcUrl: "/images/products/taupe-cardigan-dress-1.jpg",
    gallery: ["/images/products/taupe-cardigan-dress-1.jpg", "/images/products/taupe-cardigan-dress-2.jpg", "/images/products/taupe-cardigan-dress-3.jpg"],
    price: 240,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Ivory Boxy Tee",
    srcUrl: "/images/products/ivory-boxy-tee-1.jpg",
    gallery: ["/images/products/ivory-boxy-tee-1.jpg", "/images/products/ivory-boxy-tee-2.jpg", "/images/products/ivory-boxy-tee-3.jpg"],
    price: 85,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Noir Leather Blazer",
    srcUrl: "/images/products/noir-leather-blazer-1.jpg",
    gallery: ["/images/products/noir-leather-blazer-1.jpg", "/images/products/noir-leather-blazer-2.jpg", "/images/products/noir-leather-blazer-3.jpg"],
    price: 390,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Taupe Oversized Tee",
    srcUrl: "/images/products/taupe-tee-1.jpg",
    gallery: ["/images/products/taupe-tee-1.jpg", "/images/products/taupe-tee-2.jpg", "/images/products/taupe-tee-3.jpg"],
    price: 95,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Shearling Fur Coat",
    srcUrl: "/images/products/fur-coat-1.jpg",
    gallery: ["/images/products/fur-coat-1.jpg", "/images/products/fur-coat-2.jpg", "/images/products/fur-coat-3.jpg"],
    price: 480,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 8,
    title: "Mocha Cropped Tee",
    srcUrl: "/images/products/mocha-cropped-tee-1.jpg",
    gallery: ["/images/products/mocha-cropped-tee-1.jpg", "/images/products/mocha-cropped-tee-2.jpg", "/images/products/mocha-cropped-tee-3.jpg"],
    price: 75,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Olive Belted Coat Dress",
    srcUrl: "/images/products/olive-coat-dress-1.jpg",
    gallery: ["/images/products/olive-coat-dress-1.jpg", "/images/products/olive-coat-dress-2.jpg", "/images/products/olive-coat-dress-3.jpg"],
    price: 310,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Charcoal Washed Tee",
    srcUrl: "/images/products/charcoal-washed-tee-1.jpg",
    gallery: ["/images/products/charcoal-washed-tee-1.jpg", "/images/products/charcoal-washed-tee-2.jpg", "/images/products/charcoal-washed-tee-3.jpg"],
    price: 90,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 14,
    title: "Chambray Relaxed Shirt",
    srcUrl: "/images/products/chambray-shirt-1.jpg",
    gallery: ["/images/products/chambray-shirt-1.jpg", "/images/products/chambray-shirt-2.jpg", "/images/products/chambray-shirt-3.jpg"],
    price: 140,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Vintage Flare Jeans",
    srcUrl: "/images/products/vintage-flare-jeans-1.jpg",
    gallery: ["/images/products/vintage-flare-jeans-1.jpg", "/images/products/vintage-flare-jeans-2.jpg", "/images/products/vintage-flare-jeans-3.jpg"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Northloom. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes I received from Northloom. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: "August 19, 2023",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
