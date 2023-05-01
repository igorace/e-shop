import { ProductInterface } from "~/models";

export function useCart() {
  const items = useState<{ product: ProductInterface; amount: number }[]>(
    "cart-items",
    () => []
  );

  const addItem = (item: { product: ProductInterface; amount: number }) => {
    items.value.push(item);
  };

  const itemsCount = computed(() => {
    return items.value.length;
  });

  return {
    items,
    addItem,
    itemsCount,
  };
}
