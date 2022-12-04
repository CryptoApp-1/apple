import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../Redux/basketSlice"
import { motion } from "framer-motion";

function Basket() {
  const items = useSelector(selectBasketItems);

  if (items.length === 0) return null;

  return (
    <motion.div  >
    <Link href="/checkout">
      <div className="fixed bottom-10  right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            {items.length}
          </span>
        )}
        <ShoppingBagIcon className="headerIcon h-8 w-8" />
      </div>
    </Link>
    </motion.div>
  );
}

export default Basket;