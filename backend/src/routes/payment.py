from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os
import stripe

router = APIRouter()

# Set your Stripe secret key from environment variable
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")


class PaymentIntentRequest(BaseModel):
    amount: int  # Amount in cents
    currency: str = "eur"


@router.post("/create-payment-intent")
def create_payment_intent(data: PaymentIntentRequest):
    try:
        intent = stripe.PaymentIntent.create(
            amount=data.amount,
            currency=data.currency,
            payment_method_types=["card"],
        )
        return {"client_secret": intent.client_secret}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))