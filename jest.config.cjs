module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    "^.+\\.[t|j]sx?$": "babel-jest",  // Use babel to transform JS and JSX files
  },
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for the test environment
  transformIgnorePatterns: [
    "/node_modules/(?!your-module-name).+\\.js$", // Transform specific node_modules if necessary
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Ensure Jest looks for .jsx files
 
    setupFiles: ['./jest.setup.js'], // Add this line to ensure the setup file is included
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
 
};