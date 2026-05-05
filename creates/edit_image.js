const create = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://api.pixelapi.dev/v1/image/edit',
    body: { image_url: bundle.inputData.imageUrl, prompt: bundle.inputData.prompt },
  });
  return response.data;
};

module.exports = {
  key: 'edit_image',
  noun: 'Image',
  display: {
    label: 'Edit Image',
    description: 'Prompt-driven image edit (change colors, replace objects, modify backgrounds). $0.020 per edit.',
  },
  operation: {
    perform: create,
    inputFields: [
      { key: 'imageUrl', label: 'Image URL', required: true, type: 'string' },
      { key: 'prompt', label: 'Edit Prompt', required: true, type: 'string', helpText: 'e.g. "change t-shirt to navy blue", "remove the car"' },
    ],
    sample: { output_url: 'https://...', credits_used: 20 },
    outputFields: [{ key: 'output_url' }, { key: 'credits_used' }],
  },
};
