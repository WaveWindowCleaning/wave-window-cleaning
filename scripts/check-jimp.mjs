import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const jimp = require('jimp');
console.log('Static methods on Jimp:', Object.getOwnPropertyNames(jimp.Jimp).join(', '));
console.log('Keys on jimp module:', Object.keys(jimp).join(', '));
