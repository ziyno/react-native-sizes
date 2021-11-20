import { PixelRatio, useWindowDimensions } from 'react-native';

function h(pixel) {
  if (typeof pixel !== 'number') {
    pixel = parseFloat(pixel);
  }

  return PixelRatio.roundToNearestPixel(
    (useWindowDimensions().height * (pixel / 640) * 100) / 100
  );
}

function w(pixel) {
  if (typeof pixel !== 'number') {
    pixel = parseFloat(pixel);
  }

  return PixelRatio.roundToNearestPixel(
    (useWindowDimensions().width * (pixel / 360) * 100) / 100
  );
}

export { h, w };
