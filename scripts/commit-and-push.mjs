import { execSync } from 'child_process';
const GIT = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const CWD = 'C:/Users/teanc/Cleanwavewindows.com';
const run = (cmd) => {
  console.log(`> ${cmd}`);
  const out = execSync(cmd, { cwd: CWD, encoding: 'utf8', shell: true });
  if (out) console.log(out.trim());
};
run(`${GIT} add components/QuickLeadForm.tsx`);
run(`${GIT} commit -m "Fix build: remove unused AnimatePresence import"`);
run(`${GIT} push`);
console.log('Done!');
