import Button from "@/presentation/components/button";
import CategoryBadge from "@/presentation/components/category-badge";

export default function Home() {
  return (
    <main>
      <Button text="Login" />
      <CategoryBadge imageUrl="/category-badges/frontend.svg" name="Teste" />
    </main>
  );
}
