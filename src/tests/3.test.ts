import { verifyApplitoolsResult } from "../helpers/applitools";
import ProductDetails from "../pages/ProductDetails";
const { Target } = require("@applitools/eyes-webdriverio5-service");

describe("AppliFashion", () => {
    it("Test 3", () => {
        ProductDetails.open(1);

        browser.eyesCheck("product details", Target.window().fully());
        verifyApplitoolsResult();
    });
});
