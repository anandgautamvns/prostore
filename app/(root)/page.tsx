// import { Button } from "@/components/ui/button";
import ProductList from "@/components/shared/products/product-list";
import sampleData from "@/db/sample-data";

import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: "Home",
};

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve, ms));

const Homepage = () => {
  return (
    <ProductList data={sampleData.products} title="New Arriavl" limit={4} />
  );
};

export default Homepage;
