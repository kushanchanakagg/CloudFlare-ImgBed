import { onRequestPost as uploadHandler } from './upload/index.js';

export async function onRequestPost(context) {
  // forward POST request to the subfolder logic
  return await uploadHandler(context);
}
