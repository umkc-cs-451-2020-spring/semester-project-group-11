module.exports = {
    lintOnSave: false,
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
    },
    transpileDependencies: ['vuex-persist']
}
