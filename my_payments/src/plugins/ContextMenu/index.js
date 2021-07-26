export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$context = {
            EventBus: new Vue(),

            show(name, settings) {
                this.EventBus.$emit('show', { name, settings })
            },
        }
    }
}