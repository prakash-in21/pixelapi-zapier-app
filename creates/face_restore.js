const create = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://api.pixelapi.dev/v1/image/face-restore',
    body: { image_url: bundle.inputData.imageUrl },
  });
  return response.data;
};

module.exports = {
  key: 'face_restore',
  noun: 'Image',
  display: {
    label: 'Restore Face',
    description: 'Sharpen blurry / old / damaged faces. $0.005 per face. Identity preserved.',
  },
  operation: {
    perform: create,
    inputFields: [
      { key: 'imageUrl', label: 'Image URL', required: true, type: 'string' },
    ],
    sample: { output_url: 'https://...', credits_used: 5 },
    outputFields: [{ key: 'output_url' }, { key: 'credits_used' }],
  },
};
