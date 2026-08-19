import { execSync } from 'child_process';
const out = execSync('npm install resend', {
  cwd: 'C:/Users/teanc/Cleanwavewindows.com',
  encoding: 'utf8',
  shell: true,
});
console.log(out);
