export function verifyApplitoolsResult(): void {
    const testResults = browser.eyesGetTestResults() as any;
    if (testResults.getStatus() !== "Passed") {
        const testName = `'${testResults.getName()}' of '${testResults.getAppName()}'`;
        throw new Error(`Test ${testName} detected differences! See details at: ${testResults.getUrl()}`);
    }
}
