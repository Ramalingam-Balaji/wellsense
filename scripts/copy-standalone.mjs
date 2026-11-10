// Cross-platform replacement for: cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/
// Works on Windows, macOS and Linux (requires Node 16.7+ for fs.cpSync).
import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standaloneDir = join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  console.error(
    "✗ .next/standalone not found. Run `next build` first (next.config.ts must keep `output: \"standalone\"`)."
  );
  process.exit(1);
}

// 1. .next/static  ->  .next/standalone/.next/static
cpSync(join(root, ".next", "static"), join(standaloneDir, ".next", "static"), {
  recursive: true,
});

// 2. public  ->  .next/standalone/public
cpSync(join(root, "public"), join(standaloneDir, "public"), {
  recursive: true,
});

console.log("✓ Copied static assets and public/ into .next/standalone");
