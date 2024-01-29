import { system, permission, frame, tabs } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"user"
 * admin：管理员角色
 * user：普通角色
 */

const systemRouter = {
  path: "/system",
  meta: {
    icon: "setting",
    title: "menus.hssysManagement",
    rank: system
  },
  children: [
    {
      path: "/system/user/index",
      name: "SystemUser",
      meta: {
        icon: "flUser",
        title: "menus.hsUser",
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "SystemRole",
      meta: {
        icon: "role",
        title: "menus.hsRole",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "SystemDept",
      meta: {
        icon: "dept",
        title: "menus.hsDept",
        roles: ["admin"]
      }
    }
  ]
};

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "menus.permission",
    icon: "lollipop",
    rank: permission
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "menus.permissionPage",
        roles: ["admin", "user"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "menus.permissionButton",
        roles: ["admin", "user"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};

const frameRouter = {
  path: "/iframe",
  meta: {
    icon: "monitor",
    title: "menus.hsExternalPage",
    rank: frame
  },
  children: [
    {
      path: "/iframe/external",
      meta: {
        title: "menus.hsExternalDoc"
      },
      children: [
        {
          path: "/external",
          name: "https://yiming_chang.gitee.io/pure-admin-doc",
          meta: {
            title: "menus.externalLink",
            roles: ["admin", "user"]
          }
        },
        {
          path: "/pureutilsLink",
          name: "https://pure-admin-utils.netlify.app/",
          meta: {
            title: "menus.pureutilsLink",
            roles: ["admin", "user"]
          }
        }
      ]
    },
    {
      path: "/iframe/embedded",
      meta: {
        title: "menus.hsEmbeddedDoc"
      },
      children: [
        {
          path: "/iframe/ep",
          name: "FrameEp",
          meta: {
            title: "menus.hsEpDocument",
            frameSrc: "https://element-plus.org/zh-CN/",
            keepAlive: true,
            roles: ["admin", "user"]
          }
        },
        {
          path: "/iframe/tailwindcss",
          name: "FrameTailwindcss",
          meta: {
            title: "menus.hsTailwindcssDocument",
            frameSrc: "https://tailwindcss.com/docs/installation",
            keepAlive: true,
            roles: ["admin", "user"]
          }
        },
        {
          path: "/iframe/vue3",
          name: "FrameVue",
          meta: {
            title: "menus.hsVueDocument",
            frameSrc: "https://cn.vuejs.org/",
            keepAlive: true,
            roles: ["admin", "user"]
          }
        },
        {
          path: "/iframe/vite",
          name: "FrameVite",
          meta: {
            title: "menus.hsViteDocument",
            frameSrc: "https://cn.vitejs.dev/",
            keepAlive: true,
            roles: ["admin", "user"]
          }
        },
        {
          path: "/iframe/pinia",
          name: "FramePinia",
          meta: {
            title: "menus.hsPiniaDocument",
            frameSrc: "https://pinia.vuejs.org/zh/index.html",
            keepAlive: true,
            roles: ["admin", "user"]
          }
        },
        {
          path: "/iframe/vue-router",
          name: "FrameRouter",
          meta: {
            title: "menus.hsRouterDocument",
            frameSrc: "https://router.vuejs.org/zh/",
            keepAlive: true,
            roles: ["admin", "user"]
          }
        }
      ]
    }
  ]
};

const tabsRouter = {
  path: "/tabs",
  meta: {
    icon: "tag",
    title: "menus.hstabs",
    rank: tabs
  },
  children: [
    {
      path: "/tabs/index",
      name: "Tabs",
      meta: {
        title: "menus.hstabs",
        roles: ["admin", "user"]
      }
    },
    // query 传参模式
    {
      path: "/tabs/query-detail",
      name: "TabQueryDetail",
      meta: {
        // 不在menu菜单中显示
        showLink: false,
        activePath: "/tabs/index",
        roles: ["admin", "user"]
      }
    },
    // params 传参模式
    {
      path: "/tabs/params-detail/:id",
      component: "params-detail",
      name: "TabParamsDetail",
      meta: {
        // 不在menu菜单中显示
        showLink: false,
        activePath: "/tabs/index",
        roles: ["admin", "user"]
      }
    }
  ]
};

export const getRouter =()=>{
  return [systemRouter, permissionRouter, frameRouter, tabsRouter];
}
