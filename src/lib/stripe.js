import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    "seeker_pro": "price_1TgVKQG30lEVNKGPifqi30XM",
    "seeker_premium": "price_1TgW36G30lEVNKGP2M6FVOrb",
    "recruiter_growth": "price_1TgW4XG30lEVNKGP4G1Az65B",
    "recruiter_enterprise": "price_1TgW5NG30lEVNKGP60YYxUHL"
}