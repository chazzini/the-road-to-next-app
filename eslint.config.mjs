import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Optional: Add other related rules for better consistency
      // You might need to install 'eslint-plugin-import' if these rules
      // are not already provided by your Next.js configs.
      // npm install --save-dev eslint-plugin-import
      // "import/first": "error",
      // "import/newline-after-import": "error",
      // "import/no-duplicates": "error",
    },
  },
];

export default eslintConfig;
