const authentication = require('./authentication');
const generateImage = require('./creates/generate_image');
const removeBackground = require('./creates/remove_background');
const upscaleImage = require('./creates/upscale_image');
const faceRestore = require('./creates/face_restore');
const removeObject = require('./creates/remove_object');
const editImage = require('./creates/edit_image');

const beforeRequest = (request, z, bundle) => {
  if (bundle.authData && bundle.authData.apiKey) {
    request.headers['X-API-Key'] = bundle.authData.apiKey;
  }
  return request;
};

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication,
  beforeRequest: [beforeRequest],
  triggers: {},
  searches: {},
  creates: {
    [generateImage.key]: generateImage,
    [removeBackground.key]: removeBackground,
    [upscaleImage.key]: upscaleImage,
    [faceRestore.key]: faceRestore,
    [removeObject.key]: removeObject,
    [editImage.key]: editImage,
  },
  resources: {},
};
