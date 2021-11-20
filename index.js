import { Dimensions, PixelRatio } from 'react-native';

var window = Dimensions.get('window');

function h(pixel) {
  if (typeof pixel !== 'number') {
    pixel = parseFloat(pixel);
  }

  return PixelRatio.roundToNearestPixel(
    (window.height * (pixel / 640) * 100) / 100
  );
}

function w(pixel) {
  if (typeof pixel !== 'number') {
    pixel = parseFloat(pixel);
  }

  return PixelRatio.roundToNearestPixel(
    (window.width * (pixel / 360) * 100) / 100
  );
}

export { h, w };
