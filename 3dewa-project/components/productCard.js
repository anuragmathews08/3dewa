import Image from "next/image";
import Link from "next/link";
import Image1 from "public/assets/image1.jpg";

export const ProductCard = () => {
  return (
    <Link href="/modals/1" passHref>
      <div className="h-120 w-72 rounded shadow-xl mx-auto border border-palette-lighter">
        <div className="h-56 border-b-2 border-palette-lighter relative">
          <Image
            src={Image1}
            alt="Product Image"
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-32 relative">
          <div className="font-primary text-blue-900 text-lg pt-4 pl-4 font-semibold">
            Drawing room modals
          </div>
          <div className="text-sm text-gray-600 py-2 pl-4 font-primary font-light">
            3dsMax 2009 + fbx + obj
          </div>
          <div className="text-sm text-gray-600 py-2 pl-4 font-primary font-light">
            Views: 3200
          </div>
          <div
            className="text-blue-900 font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-3 pr-4 py-1 bg-blue-200 
            rounded-tl-sm triangle"
          >
            <span className="">Free</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
