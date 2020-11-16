class AppliFashion {
    open() {
        browser.url(`/tlcHackathon${process.env.APP_VERSION}.html`);
        return this;
    }

    filterOn(category: "type", type: "Soccer" | "Basketball" | "Running" | "Training");
    filterOn(category: "colors", color: "Black" | "White" | "Blue" | "Green" | "Yellow");
    filterOn(category: "brands", color: "Adibas" | "Mykey" | "Bans" | "Over Armour" | "ImBalance");
    filterOn(category: "price", color: "$0 - $50" | "$50 - $100" | "$100 - $150" | "$150 - $200");
    filterOn(category: string, value: string) {
        $(`//input[@id='${category}__${value.replace(" ", "")}']/following-sibling::span`).click();
        $("#filterBtn").click();
        return this;
    }

    get grid() {
        return $("#product_grid");
    }
}

export default new AppliFashion();
