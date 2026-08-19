import { readFileSync, writeFileSync } from 'fs';

const src = "C:/Users/teanc/.cursor/projects/c-Users-teanc-Cleanwavewindows-com/assets/c__Users_teanc_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Pic_of_me_with_pole-140b7ce4-80ff-4f32-a208-622e91d8227e.png";

// Save with correct .jpg extension
const dst = "C:/Users/teanc/Cleanwavewindows.com/public/hero-me.jpg";
const data = readFileSync(src);
writeFileSync(dst, data);
console.log(`Saved ${data.length} bytes as hero-me.jpg`);
console.log('Is JPEG:', data[0] === 0xFF && data[1] === 0xD8);
