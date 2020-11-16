import * as uuid from "uuid";

const viewport = { width: 1200, height: 800 };
const browsersInfo: Record<string, unknown>[] = [{ width: viewport.width, height: viewport.height, name: "chrome" }];
if (process.env.APP_VERSION === "MasterV2") {
    browsersInfo.push(
        { width: viewport.width, height: viewport.height, name: "firefox" },
        { width: viewport.width, height: viewport.height, name: "edgechromium" },
        { width: viewport.width, height: viewport.height, name: "safari" },
        { deviceName: "iPhone X", screenOrientation: "portrait" }
    );
}

const config: WebdriverIO.Config & { eyes: unknown } = {
    runner: "local",
    path: "/",
    specs: ["./src/tests/**/*.test.ts"],
    capabilities: [
        {
            browserName: "chrome",
            "goog:chromeOptions": {
                args: ["--headless"],
            },
        },
    ],
    outputDir: "logs",
    baseUrl: `https://demo.applitools.com`,
    framework: "mocha",
    reporters: ["spec"],
    services: ["chromedriver", "@applitools/eyes-webdriverio5-service"],
    eyes: {
        viewportSize: { width: viewport.width, height: viewport.height },
        batch: { name: "Holiday Shopping", id: process.env.APPLITOOLS_BATCH_ID },
        concurrentSessions: 15,
        useVisualGrid: true,
        browsersInfo,
    },
    mochaOpts: {
        ui: "bdd",
        timeout: 300000,
    },
    onPrepare: () => {
        process.env.APPLITOOLS_BATCH_ID = uuid.v4();
    },
    before: () => {
        browser.setWindowSize(viewport.width, viewport.height); // Needed because of headless chrome
    },
};

export { config };
