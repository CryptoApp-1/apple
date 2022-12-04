import { GetServerSideProps, GetStaticProps } from "next";
import { Tab } from "@headlessui/react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Product from "../components/Product";
import Basket from "../components/Basket";
// import Video from "../components/Video";
import { motion } from "framer-motion";
import SmoothScroll from "../components/SmoothScroll";

interface Props {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: Props) => {
  // animatie variants
  const presenceVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,

        ease: "easeInOut",
        type: "spring",
      },
    },
  };

  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };
  return (
    
    <motion.div variants={presenceVariants} animate="visible" initial="hidden">
      
      <Basket />
      <main className="relative h-[200vh] bg-[#E7ECEE]  ">
        <Landing />
      </main>
      <section className="relative -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none  transition md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white "
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              {categories.map((category, id) => (
                <Tab.Panel key={category._id} className="tabPanel">
                  {showProducts(id)}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* <Video/> */}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

// Back  END Code
export const getServerSideProps : GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return {
    props: {
      categories,
      products,
    },
  };
};

// Backend Code
