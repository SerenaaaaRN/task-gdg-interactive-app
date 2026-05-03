import { useParams } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShoppingBag, ChevronLeft, Star, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Book } from "@/types";

const ProductDetails = () => {
  const { id } = useParams();
  const { books, currency } = useShop();
  const navigate = useNavigate();

  const book = (books as Book[]).find((b: Book) => b._id === id);

  if (!book) {
    return (
      <Container className="mt-32 text-center">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-muted mb-6 flex h-20 w-20 items-center justify-center rounded-full">
            <BookOpen className="text-muted-foreground size-8" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Book not found</h2>
          <p className="text-muted-foreground mb-6">The book you're looking for doesn't seem to exist.</p>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="pt-28 pb-20">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-10 flex items-center gap-2">
        <ChevronLeft size={18} />
        Back
      </Button>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Book Cover Section */}
        <div className="bg-secondary shadow-warm flex flex-1 items-center justify-center rounded-3xl p-12 lg:p-16">
          <img
            src={book.cover_image}
            alt={book.title}
            className="h-auto max-h-125 max-w-full rounded-lg object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Book Info Section */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline">{book.category.name}</Badge>
              <Badge variant="gold" className="gap-1">
                <Star className="size-3" />
                Featured
              </Badge>
            </div>
            <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">{book.title}</h1>
            <p className="text-muted-foreground text-lg font-medium">{book.author.name}</p>
            <p className="text-accent text-3xl font-bold">
              {currency}
              {book.details.price.replace("Rp ", "")}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold tracking-tight">Synopsis</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{book.summary}</p>
          </div>

          {/* Details Grid */}
          <div className="border-border bg-muted/30 grid grid-cols-2 gap-4 rounded-2xl border p-6">
            <DetailItem label="Author" value={book.author.name} />
            <DetailItem label="Publisher" value={book.publisher} />
            <DetailItem label="Pages" value={book.details.total_pages} />
            <DetailItem label="Format" value={book.details.format} />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button variant="accent" size="lg" className="flex flex-1 items-center justify-center gap-3">
              <ShoppingBag size={20} />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="flex flex-1 items-center justify-center">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">{label}</p>
    <p className="mt-1 font-bold">{value}</p>
  </div>
);

export default ProductDetails;
