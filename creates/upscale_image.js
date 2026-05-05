const create = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://api.pixelapi.dev/v1/image/upscale',
    body: { image_url: bundle.inputData.imageUrl, scale: bundle.inputData.scale || 4 },
  });
  return response.data;
};

module.exports = {
  key: 'upscale_image',
  noun: 'Image',
  display: {
    label: 'Upscale Image',
    description: 'Upscale image 2× or 4×. $0.060 per image.',
  },
  operation: {
    perform: create,
    inputFields: [
      { key: 'imageUrl', label: 'Image URL', required: true, type: 'string' },
      { key: 'scale', label: 'Scale', type: 'integer', default: 4, choices: { '2': '2×', '4': '4×' } },
    ],
    sample: { output_url: 'https://...', credits_used: 60 },
    outputFields: [{ key: 'output_url' }, { key: 'credits_used' }],
  },
};
