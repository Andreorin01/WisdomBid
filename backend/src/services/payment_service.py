import stripe

stripe.api_key = "your_stripe_secret_key"


def create_payment_intent(amount: int, currency: str = "eur"):
    try:
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency=currency,
            payment_method_types=["card"],
        )
        return intent
    except stripe.error.StripeError as e:
        raise Exception(f"Stripe error: {e.user_message}")