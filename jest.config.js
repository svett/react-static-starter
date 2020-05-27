module.exports = {
  verbose: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "**/src/**/*.spec.ts?(x)"
  ],
  globals: {
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.test.json"
    }
  }
};
