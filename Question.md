- q1: 对于 vue3 + ts ts 不识别 vue文件解决方案。
    env.d.ts 文件中配置：
    ```javascript
        declare module "*.vue" {
            import type { DefineComponent } from "vue";
            const vueComponent: DefineComponent<{}, {}, any>;
            export default vueComponent;
        }
    ```
