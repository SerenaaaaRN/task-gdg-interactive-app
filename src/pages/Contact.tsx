import type { FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader, SHTitle, SHDescription } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Map, Phone, Clock, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container className="pt-28 pb-20">
      <SectionHeader className="pb-14">
        <SHTitle title="Get in" color="Touch" />
        <SHDescription content="Have a question, suggestion, or just want to say hello? We'd love to hear from you." />
      </SectionHeader>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide">Your Name</label>
                <Input type="text" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide">Email Address</label>
                <Input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold tracking-wide">Subject</label>
              <Input type="text" placeholder="How can we help you?" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold tracking-wide">Message</label>
              <textarea
                placeholder="Tell us more about your inquiry..."
                required
                rows={6}
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/20 w-full rounded-lg border px-4 py-3 font-serif text-base transition-all duration-200 outline-none focus-visible:ring-3 md:text-sm"
              />
            </div>

            <Button variant="accent" size="lg" type="submit" className="flex items-center gap-2">
              <Send className="size-4" />
              Send Message
            </Button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="border-border bg-secondary shadow-warm-sm rounded-2xl border p-8">
            <h3 className="mb-8 text-xl font-bold">Contact Information</h3>

            <div className="space-y-6">
              <ContactItem icon={Map} title="Visit Us" detail="123 Library Lane, Oxford, OX1 2JD, United Kingdom" />
              <ContactItem
                icon={Mail}
                title="Email Us"
                detail="hello@rillahbook.co"
                href="mailto:hello@rillahbook.co"
              />
              <ContactItem icon={Phone} title="Call Us" detail="+44 123 456 7890" href="tel:+441234567890" />
              <ContactItem icon={Clock} title="Working Hours" detail="Mon – Fri: 9AM – 6PM (GMT)" />
            </div>

            <div className="ornament mt-8 mb-6">
              <span className="ornament-icon">✦</span>
            </div>

            <p className="text-muted-foreground text-center text-xs leading-relaxed italic">
              "The only thing that you absolutely have to know, is the location of the library."
              <span className="mt-1 block font-semibold not-italic">— Albert Einstein</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const ContactItem = ({
  icon: Icon,
  title,
  detail,
  href,
}: {
  icon: typeof Map;
  title: string;
  detail: string;
  href?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
      <Icon className="text-accent size-4" />
    </div>
    <div>
      <p className="text-sm font-bold">{title}</p>
      {href ? (
        <a href={href} className="text-muted-foreground hover:text-accent text-sm transition-colors">
          {detail}
        </a>
      ) : (
        <p className="text-muted-foreground text-sm">{detail}</p>
      )}
    </div>
  </div>
);

export default Contact;
