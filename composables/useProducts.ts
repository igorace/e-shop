import { ProductInterface } from "~/types";

export function useProducts() {
  const products = useState<ProductInterface[]>("shop-products", () => []);

  const fetchProducts = async () => {
    // products.value = (await import("~/public/static/mock/data.json"))
    //   .default as ProductInterface[];
    const { data } = await useFetch<ProductInterface[]>(
      `https://63c10327716562671870f959.mockapi.io/products`,
      {
        query: {
          umid: "84042012-4241-4b50-9295-98a095239927",
          auth: "3bd1ed0ea25e030aebac2180cda48b2d7a1ccc30-de7e89fb8fbb9ae27aa3b09ca443cf759a03f70c",
        },
      }
    );
    products.value = data.value || [];
  };

  const updateProductCount = (id: string, amount: number) => {
    products.value.forEach((p) => {
      if (p.id === id) {
        p.availableAmount += amount;
      }
    });
  };

  return {
    products,
    fetchProducts,
    updateProductCount,
  };
}
