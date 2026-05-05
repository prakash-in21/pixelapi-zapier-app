const create = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://api.pixelapi.dev/v1/image/remove-object',
    body: { image_url: bundle.inputData.imageUrl, prompt: bundle.inputData.prompt },
  });
  return response.data;
};

module.exports = {
  key: 'remove_object',
  noun: 'Image',
  display: {
    label: 'Remove Object',
    description: 'Remove unwanted objects, people, watermarks via prompt. $0.025 per image.',
  },
  operation: {
    perform: create,
    inputFields: [
      { key: 'imageUrl', label: 'Image URL', required: true, type: 'string' },
      { key: 'prompt', label: 'Object to Remove', required: true, type: 'string', helpText: 'e.g. "people in the background", "the watermark"' },
    ],
    sample: { output_url: 'https://...', credits_used: 25 },
    outputFields: [{ key: 'output_url' }, { key: 'credits_used' }],
  },
};
