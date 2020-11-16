import { verifyApplitoolsResult } from "../helpers/applitools";
import AppliFashion from "../pages/AppliFashion";
const { Target } = require("@applitools/eyes-webdriverio5-service");

describe("AppliFashion", () => {
    it("Test 1", () => {
        AppliFashion.open();

        browser.eyesCheck("main page", Target.window().fully());
        verifyApplitoolsResult();
    });
});
