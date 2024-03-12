import { loadStripe, Stripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }: { lineItems: any }) {
    let stripePromise: Promise<Stripe | null> | null = null;
    const getStripe = async () => {
        if (!stripePromise) {
            const apiKey = "pk_test_51OtP3wSCtYQgyLlmoMcBIwxp3TvfLSsyiWfRk24fiID7UKmx93IWhAdKzbuZTnKuGn8x16Z6IpnXr0UScLQQgZpl00QTpvotNf";
            if (!apiKey) {
                throw new Error("Stripe API key is not defined");
            }
            stripePromise = loadStripe(apiKey);
        }
        return stripePromise;
    };

    const stripe = await getStripe();

    if (!stripe) {
        throw new Error("Failed to load Stripe");
    }

    try {
        await stripe.redirectToCheckout({
            mode: "payment",
            lineItems,
            successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: window.location.origin
        });
    } catch (error) {
        console.error("Error during checkout:", error);
        throw error; // Rethrow the error for handling elsewhere if necessary
    }
}
