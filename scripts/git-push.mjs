import { execSync } from 'child_process';
const GIT = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const CWD = 'C:/Users/teanc/Cleanwavewindows.com';
const run = (cmd) => execSync(cmd, { cwd: CWD, encoding: 'utf8', shell: true });

console.log('=== Committed relevant files ===');
console.log(run(`${GIT} ls-files app/lp app/api/quote components/QuickLeadForm.tsx`));

console.log('=== Recent commits ===');
console.log(run(`${GIT} log --oneline -6`));

console.log('=== TypeScript check ===');
try {
  console.log(run('npx tsc --noEmit 2>&1'));
} catch(e) {
  console.log('TS errors:', e.stdout?.slice(-2000));
}
