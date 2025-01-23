/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: import("ts-jest").JestConfigWithTsJest = {
    preset: "ts-jest",
    // Specify the test environment
    testEnvironment: "node", // Use 'jsdom' for a browser-like environment if needed
    // Use ts-jest for .ts/.tsx files
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    // Match files with .test.ts or .spec.ts extensions
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};

export default config;
