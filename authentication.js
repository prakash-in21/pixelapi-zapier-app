// API key authentication
module.exports = {
  type: 'custom',
  fields: [
    {
      key: 'apiKey',
      label: 'API Key',
      required: true,
      helpText: 'Get a free API key at [pixelapi.dev/app](https://pixelapi.dev/app) — 500 free credits, no credit card.',
      type: 'password',
    },
  ],
  test: {
    method: 'GET',
    url: 'https://api.pixelapi.dev/v1/account/credits',
    headers: { 'X-API-Key': '{{bundle.authData.apiKey}}' },
  },
  connectionLabel: 'PixelAPI ({{bundle.authData.apiKey | slice:0:8}}...)',
};
