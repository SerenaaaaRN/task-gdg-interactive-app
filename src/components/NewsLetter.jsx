import Container from "./ui/Container";
import Input from "./ui/Input";
import Button from "./ui/Button";

const NewsLetter = () => {
  // Rule 5.8: Form submission logic in event handler, not effect.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <section className="py-16">
      <Container>
        <div className="bg-[var(--color-dark-surface)] rounded-[2rem] p-8 md:p-16 text-center shadow-xl overflow-hidden relative">
          {/* Subtle decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark-text)] mb-6">
              Join Our Literary Circle
            </h2>
            <p className="text-[var(--color-dark-text)]/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed italic">
              Curated book recommendations, exclusive author interviews, and limited edition releases — directly in your inbox.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                placeholder="Enter your email address..."
                className="flex-grow"
                required
              />
              <Button variant="accent" type="submit" className="whitespace-nowrap shadow-lg">
                Subscribe Today
              </Button>
            </form>

            <p className="text-[var(--color-dark-text)]/40 text-sm mt-8">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;