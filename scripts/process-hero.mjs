import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const src = "C:/Users/teanc/.cursor/projects/c-Users-teanc-Cleanwavewindows-com/assets/c__Users_teanc_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Pic_of_me_with_pole-140b7ce4-80ff-4f32-a208-622e91d8227e.png";
const dst = "C:/Users/teanc/Cleanwavewindows.com/public/hero-me.png";

try {
  const data = readFileSync(src);
  writeFileSync(dst, data);
  console.log(`Copied ${data.length} bytes to ${dst}`);
} catch (e) {
  console.error('Error:', e.message);
}
