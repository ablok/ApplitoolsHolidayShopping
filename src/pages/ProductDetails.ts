class ProductDetails {
    open(productId: number) {
        browser.url(`/tlcHackathonProductDetails${process.env.APP_VERSION}.html?id=${productId}`);
        return this;
    }
}

export default new ProductDetails();
