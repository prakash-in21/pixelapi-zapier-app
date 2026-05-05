const create = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://api.pixelapi.dev/v1/image/remove-background',
    body: { image_url: bundle.inputData.imageUrl },
  });
  return response.data;
};

module.exports = {
  key: 'remove_background',
  noun: 'Image',
  display: {
    label: 'Remove Background',
    description: 'Remove background from an image. Returns transparent PNG. $0.010/image — 11× cheaper than remove.bg.',
  },
  operation: {
    perform: create,
    inputFields: [
      { key: 'imageUrl', label: 'Image URL', required: true, type: 'string', helpText: 'Public URL of the image' },
    ],
    sample: { output_url: 'https://...', credits_used: 10 },
    outputFields: [
      { key: 'output_url', label: 'Transparent PNG URL' },
      { key: 'credits_used', label: 'Credits Used' },
    ],
  },
};
