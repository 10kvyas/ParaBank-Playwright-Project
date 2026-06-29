(async () => {
    const report = await import('multiple-cucumber-html-reporter');
    report.generate({
    jsonDir: "reports",
    reportPath: "reports/html",
    pageTitle: "Parabank Automation Report",
    reportName: "Playwright Report",
    openReportInBrowser: true
})
})();

