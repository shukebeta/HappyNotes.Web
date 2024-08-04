import { ApiService } from '~/plugins/axios'

declare module '#app' {
    interface NuxtApp {
        $api: ApiService
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $api: ApiService
    }
}
