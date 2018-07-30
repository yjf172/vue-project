import Vue from 'vue'
import Router from 'vue-router'
import design from "@/components/design/design"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: design
    }
  ]
})
