const create = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://api.pixelapi.dev/v1/image/generate',
    body: { prompt: bundle.inputData.prompt },
  });
  return response.data;
};

module.exports = {
  key: 'generate_image',
  noun: 'Image',
  display: {
    label: 'Generate AI Image',
    description: 'Generate an AI image from a text prompt. Costs $0.001 per image.',
  },
  operation: {
    perform: create,
    inputFields: [
      { key: 'prompt', label: 'Prompt', required: true, type: 'string', helpText: 'Text describing the desired image' },
    ],
    sample: { output_url: 'https://...', credits_used: 1 },
    outputFields: [
      { key: 'output_url', label: 'Image URL' },
      { key: 'credits_used', label: 'Credits Used' },
    ],
  },
};
