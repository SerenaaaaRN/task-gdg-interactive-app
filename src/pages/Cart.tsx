import { Container } from "@/components/layout/Container";
import { SectionHeader, SHTitle, SHDescription } from "@/components/common/SectionHeader";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, ArrowRight, BookOpen, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useShop();
  const navigate = useNavigate();

  return (
    <Container className="pt-28 pb-20">
      <SectionHeader className="pb-10">
        <SHTitle title="Your" color="Cart" />
        <SHDescription content="Review your selected books before checkout" />
      </SectionHeader>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in-up">
          <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-secondary shadow-warm">
            <ShoppingCart size={40} className="text-muted-foreground" />
          </div>
          <h2 className="mb-3 text-3xl font-bold">Your cart is empty</h2>
          <p className="text-muted-foreground mb-10 max-w-sm text-base leading-relaxed">
            Looks like you haven't added any books to your cart yet. Discover our curated collection and find your next read.
          </p>
          <Button
            variant="accent"
            size="lg"
            onClick={() => navigate("/shop")}
            className="flex items-center gap-3"
          >
            Start Shopping
            <ArrowRight size={18} />
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-background shadow-warm-sm">
            {cartItems.map((_, index: number) => (
              <div
                key={index}
                className="flex items-center gap-6 border-b border-border p-6 last:border-b-0"
              >
                <div className="flex h-20 w-16 items-center justify-center rounded-lg bg-secondary p-2">
                  <BookOpen className="size-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Book Item</h4>
                  <p className="text-sm text-muted-foreground">Quantity: 1</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            You have {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart.
          </p>
        </div>
      )}
    </Container>
  );
};

export default Cart;
