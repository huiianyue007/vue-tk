<template>
  <page-content page-title="方法 - routerAuth">
    <docs-component>
      <div slot="description">
        <p>路由鉴权</p>
      </div>

      <div slot="api">
        <api-table name="使用方法">
          <code-block lang="javascript">
            import VueTk from 'vue-tk'
            import router from '路由地址'

            // 编写路由鉴权对象

            const auth = [
              {
                match: '匹配的路由地址',
                except: '排除的路由地址',
                handler: function (route, next) {       // 路由鉴权方法
                  // 判断路由是否有权访问
                  if (...) {
                    next(true) // 可以访问
                  } else if (...) {
                    next(false) // 禁止访问
                  } esle {
                    next('/login') // 跳转到该地址
                  }
                },
                fallbackUrl: '' // 禁止访问的跳转地址，优先级低于handler中返回的地址
              },
              ....
            ]

            VueTk.tkRouterAuth.init(auth, router)
          </code-block>
        </api-table>

        <api-table name="路由匹配示例">
          <code-block lang="javascript">
            // 除login页面外的所有路由
            {
              match: '*',         // 代表所有路由
              except: '/login'    // 路由path
            }

            // 匹配以/user开头的所有路由，但不包含'/user/profile' 和 '/user/public'
            {
              match: /^\/user/,   // 正则，匹配路由path
              except: [
                '/user/profile',  // 数组，匹配包含的路由path
                '/user/public'
              ]
            }
          </code-block>
        </api-table>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {}
</script>

<style scoped>
  .field-group{
    display:flex;
    align-items: center;
  }
  .field-group>*{
    margin:0 16px;
  }
</style>
