// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  // plugins: [
  //   '~/plugins/element-plus.ts',
  // ],
  // css: [
  //   'element-plus/dist/index.css',
  //   '~/assets/css/main.css',
  // ],
  // vite: {
  //   vue: {
  //     template: {
  //       compilerOptions: {
  //         isCustomElement: (tag) => tag.startsWith('el-')
  //       }
  //     }
  //   }
  // },
  modules: ['@element-plus/nuxt', '@nuxt/image'],
  //  elementPlus: {
  //   importStyle: 'css',  // 确保样式正常加载
  //   // icon: undefined
  // },
})

