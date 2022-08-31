const { defineConfig } = require('cypress');

module.exports = defineConfig({
	env: {
		url: 'TestArena',
	},
	animationDistanceThreshold: 5,
	chromeWebSecurity: true,
	defaultCommandTimeout: 4000,
	execTimeout: 60000,
	fixturesFolder: 'cypress/fixtures',
	hosts: null,
	modifyObstructiveCode: true,
	numTestsKeptInMemory: 20,
	pageLoadTimeout: 60000,
	port: null,
	projectId: 'null',
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: 'cypress/results/reports',
		overwrite: false,
		html: true,
		json: true,
	},
	requestTimeout: 5000,
	responseTimeout: 30000,
	screenshotsFolder: 'cypress/results/screenshots',
	taskTimeout: 60000,
	trashAssetsBeforeRuns: true,
	userAgent: null,
	video: false,
	videoCompression: 32,
	videoUploadOnPasses: true,
	videosFolder: 'cypress/videos',
	viewportHeight: 1080,
	viewportWidth: 1920,
	waitForAnimations: true,
	watchForFileChanges: false,
	e2e: {
		setupNodeEvents(on, config) {
			require('cypress-failed-log/on')(on);
		},
		baseUrl: 'http://demo.testarena.pl',
		excludeSpecPattern: '*.hot-update.js',
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
		supportFile: './cypress/support/e2e.js',
	},
});
