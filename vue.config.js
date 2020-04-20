module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "~@/styles/_app.scss";
                    @import "~@/styles/_calendar.scss";
                    @import "~@/styles/_forms.scss";
                `
            }
        }
    }
}
