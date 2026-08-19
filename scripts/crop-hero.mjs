import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Jimp, intToRGBA } = require('jimp');

const SRC = 'C:/Users/teanc/Cleanwavewindows.com/public/hero-me.png';
const DST = 'C:/Users/teanc/Cleanwavewindows.com/public/hero-me.png';

async function run() {
  const img = await Jimp.read(SRC);
  const { width, height } = img.bitmap;
  console.log(`Image dimensions: ${width} x ${height}`);

  // Find first non-black row from top (removes phone status bar)
  let topCrop = 0;
  for (let y = 0; y < Math.min(160, height); y++) {
    let rowSum = 0;
    for (let x = 0; x < width; x++) {
      const pixel = intToRGBA(img.getPixelColor(x, y));
      rowSum += (pixel.r + pixel.g + pixel.b) / 3;
    }
    if (rowSum / width > 25) {
      topCrop = y;
      break;
    }
  }

  // Find last non-black row from bottom
  let bottomCrop = height;
  for (let y = height - 1; y > height - 160; y--) {
    let rowSum = 0;
    for (let x = 0; x < width; x++) {
      const pixel = intToRGBA(img.getPixelColor(x, y));
      rowSum += (pixel.r + pixel.g + pixel.b) / 3;
    }
    if (rowSum / width > 25) {
      bottomCrop = y + 1;
      break;
    }
  }

  console.log(`Cropping: top=${topCrop}px, bottom=${bottomCrop}px (of ${height}px)`);
  img.crop({ x: 0, y: topCrop, w: width, h: bottomCrop - topCrop });

  // Sharpening unsharp mask kernel
  img.convolute([
    [ 0, -1,  0],
    [-1,  5, -1],
    [ 0, -1,  0],
  ]);

  // Subtle boost
  img.brightness(0.02);
  img.contrast(0.10);

  await img.write(DST);
  console.log(`Done. Saved ${img.bitmap.width} x ${img.bitmap.height} → ${DST}`);
}

run().catch(console.error);
