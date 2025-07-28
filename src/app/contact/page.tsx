import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <main className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Drop us a line!
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </main>
  );
}
