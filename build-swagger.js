const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const spec = {
  input: path.join(__dirname, 'src/api/openapi.yaml'),
  output: path.join(__dirname, '_site/api/index.html'),
  ui: 'swagger',
  theme: 'dark',
  title: 'Jokes API Documentation'
};

console.log('Generating Swagger API docs...');

try {
  // Ensure output directory exists
  fs.mkdirSync(path.join(__dirname, '_site/api'), { recursive: true });
  
  const cmd = [
    'npx',
    'openapi-generate-html',
    `-i "${spec.input}"`,
    `-o "${spec.output}"`,
    `--ui=${spec.ui}`,
    `--theme=${spec.theme}`,
    `--title="${spec.title}"`
  ].join(' ');
  
  execSync(cmd, { stdio: 'inherit' });
  console.log('✓ Generated Swagger API docs at _site/api/index.html');
} catch (err) {
  console.error('Error generating Swagger docs:', err.message);
  process.exit(1);
}
