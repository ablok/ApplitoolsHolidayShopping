import { verifyApplitoolsResult } from "../helpers/applitools";
import AppliFashion from "../pages/AppliFashion";
const { Target } = require("@applitools/eyes-webdriverio5-service");

describe("AppliFashion", () => {
    it("Test 2", () => {
        const appliFashion = AppliFashion.open();
        appliFashion.filterOn("colors", "Black");

        browser.eyesCheck("filter by color", Target.region(appliFashion.grid));
        verifyApplitoolsResult();
    });
});
