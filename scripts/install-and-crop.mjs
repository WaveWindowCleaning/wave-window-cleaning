// Install jimp then crop + sharpen the hero image
import { execSync } from 'child_process';
import { createRequire } from 'module';
import { writeFileSync } from 'fs';

console.log('Installing jimp...');
try {
  execSync('npm install jimp --no-save', { stdio: 'inherit', cwd: 'C:/Users/teanc/Cleanwavewindows.com' });
} catch(e) {
  console.log('install error', e.message);
}

const require = createRequire(import.meta.url);
const Jimp = require('jimp');

const SRC = 'C:/Users/teanc/Cleanwavewindows.com/public/hero-me.png';
const DST = 'C:/Users/teanc/Cleanwavewindows.com/public/hero-me.png';

async function run() {
  const img = await Jimp.read(SRC);
  const { width, height } = img.bitmap;
  console.log(`Image dimensions: ${width} x ${height}`);

  // Detect black rows from the top to crop status bar
  // Scan from top: find first row with average brightness > 20
  let topCrop = 0;
  for (let y = 0; y < Math.min(150, height); y++) {
    let rowSum = 0;
    for (let x = 0; x < width; x++) {
      const pixel = Jimp.intToRGBA(img.getPixelColor(x, y));
      rowSum += (pixel.r + pixel.g + pixel.b) / 3;
    }
    const avg = rowSum / width;
    if (avg > 25) {
      topCrop = y;
      break;
    }
  }

  // Detect black rows from the bottom
  let bottomCrop = height;
  for (let y = height - 1; y > height - 150; y--) {
    let rowSum = 0;
    for (let x = 0; x < width; x++) {
      const pixel = Jimp.intToRGBA(img.getPixelColor(x, y));
      rowSum += (pixel.r + pixel.g + pixel.b) / 3;
    }
    const avg = rowSum / width;
    if (avg > 25) {
      bottomCrop = y + 1;
      break;
    }
  }

  console.log(`Cropping: top=${topCrop}, bottom=${bottomCrop} (out of ${height})`);

  // Crop out the black bars
  img.crop(0, topCrop, width, bottomCrop - topCrop);

  // Apply sharpening via convolve kernel (unsharp mask approximation)
  img.convolute([
    [ 0, -1,  0],
    [-1,  5, -1],
    [ 0, -1,  0],
  ]);

  // Slight brightness/contrast boost
  img.brightness(0.02).contrast(0.08);

  await img.writeAsync(DST);
  console.log(`Saved to ${DST}. New size: ${img.bitmap.width} x ${img.bitmap.height}`);
}

run().catch(console.error);
