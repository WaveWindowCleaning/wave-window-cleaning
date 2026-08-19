import { execSync } from 'child_process';
try {
  const out = execSync('npx next build', {
    cwd: 'C:/Users/teanc/Cleanwavewindows.com',
    encoding: 'utf8',
    shell: true,
    env: { ...process.env, RESEND_API_KEY: 're_test', NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: 'test' },
  });
  console.log(out);
} catch(e) {
  console.log('STDOUT:', e.stdout?.slice(-3000));
  console.log('STDERR:', e.stderr?.slice(-3000));
}
