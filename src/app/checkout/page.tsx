import { CheckoutForm } from "@/components/checkout-form";

export default function CheckoutPage() {
    return (
        <main className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
                    Checkout
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Almost there! Just a few more details and your order is complete.
                </p>
            </div>
            <CheckoutForm />
        </main>
    );
}
