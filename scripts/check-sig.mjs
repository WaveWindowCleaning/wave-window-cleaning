import { readFileSync } from 'fs';
const src = "C:/Users/teanc/.cursor/projects/c-Users-teanc-Cleanwavewindows-com/assets/c__Users_teanc_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Pic_of_me_with_pole-140b7ce4-80ff-4f32-a208-622e91d8227e.png";
const data = readFileSync(src);
console.log('Size:', data.length);
console.log('First 16 bytes:', [...data.slice(0,16)].map(b => b.toString(16).padStart(2,'0')).join(' '));
// Check for JPEG signature too
console.log('Is JPEG:', data[0] === 0xFF && data[1] === 0xD8);
console.log('Is PNG:', data[0] === 0x89 && data[1] === 0x50);
