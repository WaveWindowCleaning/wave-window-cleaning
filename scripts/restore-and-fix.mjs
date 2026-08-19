import { readFileSync, writeFileSync, statSync } from 'fs';

// Step 1: Restore original image from assets
const src = "C:/Users/teanc/.cursor/projects/c-Users-teanc-Cleanwavewindows-com/assets/c__Users_teanc_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Pic_of_me_with_pole-140b7ce4-80ff-4f32-a208-622e91d8227e.png";
const dst = "C:/Users/teanc/Cleanwavewindows.com/public/hero-me.png";

const data = readFileSync(src);
writeFileSync(dst, data);

const stat = statSync(dst);
console.log(`Restored original: ${stat.size} bytes`);

// Verify PNG signature
const sig = [...data.slice(0,8)].map(b => b.toString(16).padStart(2,'0')).join(' ');
console.log('Valid PNG:', sig === '89 50 4e 47 0d 0a 1a 0a');
