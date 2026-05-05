# pixelapi-zapier-app

Official Zapier integration for [PixelAPI](https://pixelapi.dev) — AI image, audio, and 3D REST API.

## Available Actions

| Action | What it does | Cost |
|---|---|---|
| **Generate AI Image** | Create images from text prompts | $0.001/image |
| **Remove Background** | Transparent PNG output | $0.010/image |
| **Upscale Image** | 2× or 4× upscaling | $0.060/image |
| **Restore Face** | Sharpen blurry/old faces | $0.005/face |
| **Remove Object** | Remove people, watermarks, distractions | $0.025/image |
| **Edit Image** | Prompt-driven edit | $0.020/edit |

## Use cases

- **Shopify / WooCommerce store owner:** auto-clean every product upload (Trigger: Shopify new-product → PixelAPI Remove Background → Shopify update-image)
- **Real estate agent:** virtual-stage every listing photo (Trigger: Dropbox new-photo → PixelAPI Edit + Relight → Email)
- **Content creator:** AI thumbnails for every blog post (Trigger: WordPress new-post → PixelAPI Generate → upload to media library)

## Setup

1. Sign up at [pixelapi.dev/app](https://pixelapi.dev/app) — 500 free credits, no credit card.
2. In Zapier, add **PixelAPI** as an app, paste your API key.
3. Build a Zap.

## Pricing

500 free credits on signup. Then $10/mo (10K credits), $50/mo (60K), $200/mo (300K). INR billing with GST invoice via Razorpay; international USD via Stripe / PayPal.

## Developer setup

```bash
npm install
zapier login
zapier push                  # push to your Zapier developer account
zapier promote 1.0.0         # submit for public review
```

Full Zapier CLI docs: https://platform.zapier.com/cli_docs/

## Support

- Docs: [pixelapi.dev/docs](https://pixelapi.dev/docs)
- Issues: [GitHub issues](https://github.com/prakash-in21/pixelapi-zapier-app/issues)
- Email: support@pixelapi.dev

## License

MIT.

---

Built by [PixelAPI](https://pixelapi.dev). Indian business, GST registered.
