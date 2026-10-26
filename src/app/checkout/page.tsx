import { redirect } from "next/navigation";

// Checkout happens on Stripe's secure page, started from the bag.
export default function CheckoutPage() {
  redirect("/bag");
}
