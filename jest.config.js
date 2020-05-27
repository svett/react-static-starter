module.exports = {
  verbose: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/config/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.css$":  "<rootDir>/config/jest.transform.js",
    "^.+\\.png":  "<rootDir>/config/jest.transform.js"
  },
  testMatch: [
    "**/src/**/*.spec.ts?(x)"
  ],
  globals: {
    "ts-jest": {
      "tsConfig": "<rootDir>/config/jest.tsconfig.json"
    }
  }
};
