import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <section className="py-16">
      <Container>
        <div className="bg-secondary rounded-3xl p-8 md:p-16 shadow-lg overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-surface mb-6">Join Our Literary Circle</h2>
            <p className="text-dark-surface text-lg mb-10 leading-relaxed italic">
              Curated book recommendations, exclusive author interviews, and limited edition releases — directly in your
              inbox.
            </p>

            <form className="flex flex-row gap-4 max-w-lg" onSubmit={handleSubmit}>
              <Input type="email" placeholder="Enter your email address..." className="grow" required />
              <Button variant="accent" type="submit" className="whitespace-nowrap shadow-lg">
                Subscribe Today
              </Button>
            </form>

            <p className="text-dark-text/40 text-sm mt-8">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
