import path from "path";
// import { fileURLToPath } from "url"; // Not needed for CommonJS __dirname/__filename

export default {
  preset: "ts-jest", // This preset handles .ts and .tsx transformation
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
    "^.+\\.jsx?$": ["ts-jest", {}] 
  },
  // Jest needs to transform these ESM modules from node_modules
  transformIgnorePatterns: [
    "/node_modules/(?!p-wait-for|get-port)/", // Add other ESM specific modules if they cause similar issues
  ],
  // The transform key might be simplified or even removed if preset handles everything needed.
  // If you have other file types needing specific transforms (e.g. .vue, .svelte, .css), add them here.
  moduleNameMapper: {
    // "^(\\.{1,2}/.*)\\.js$": "$1", // Less critical for CJS, but can keep if you have mixed imports
    "^uuid$": "uuid", // Keep your existing specific mappers
    "^@azure/(.*)$": "<rootDir>/node_modules/@azure/$1",
    "^mssql$": "<rootDir>/node_modules/mssql",
    // Alias for webview-ui tests
    "^@/(.*)$": "<rootDir>/webview-ui/src/$1",
    // Add vscode mock mapping if you create the global mock file
    // "^vscode$": "<rootDir>/test/__mocks__/vscode.ts", 
  },
  // extensionsToTreatAsEsm: [".ts"], // REMOVED for CommonJS
  testTimeout: 10000,
  // globals: { // __dirname and __filename are naturally available in CommonJS
  //   __dirname: path.dirname(fileURLToPath(import.meta.url)),
  //   __filename: path.resolve(fileURLToPath(import.meta.url)),
  // },
  collectCoverageFrom: [
    "src/**/*.{js,ts}", // More specific: only from src
    "!src/**/*.test.{js,ts}", // Exclude test files
    "!src/**/types.ts", // Exclude pure type definition files
    "!**/node_modules/**", 
    "!**/vendor/**",
  ],
  globalSetup: "<rootDir>/test/jest.global-setup.ts",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup-after-env.js"],
  maxWorkers: 1, 
  testMatch: [
    // Be more specific to target only Jest tests if Vitest files are in similar locations
    // This pattern assumes Jest tests are primarily in src/services or a general test/unit directory
    // and have .test.ts (or .spec.ts if you use that)
    "**/src/services/**/*.test.ts",
    "**/test/unit/**/*.test.ts", 
    "<rootDir>/test/testEnv.test.ts" // Explicitly include this if it's a Jest test
    // Adjust if your Jest test file locations are different
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/out/",
    // Ignore Vitest tests if they are in specific directories or have a clear naming pattern
    // Example: if Vitest tests are always in src/test/vitest or end with .vitest.ts
    // For now, let's assume Vitest tests might be in src/test/ and not end with .test.ts for Jest
    "<rootDir>/src/test/suite/", // Ignore VS Code integration tests
    // If Vitest files are mixed with Jest files and have a .test.ts suffix, this gets tricky.
    // You might need a more specific naming convention for Jest vs. Vitest files,
    // or configure Vitest to use a different suffix (e.g., .vitest.ts)
    // For now, if a file like slimifier.test.ts is for Vitest, the testMatch change might not be enough.
    // Let's add specific ignores for the Vitest files that failed:
    "<rootDir>/src/test/unit/context/slimifier.test.ts",
    "<rootDir>/src/test/unit/agent/agent.test.ts",
    "<rootDir>/src/test/unit/ignore/base.test.ts",
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/project-map/package.json",
    "<rootDir>/welcome-page/package.json"
  ]
};
