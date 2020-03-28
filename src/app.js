import Vue from "vue/dist/vue.common.js"
import Button from "./Button.vue"


Vue.component("j-button",Button);

new Vue({
    el:"#app",
    data(){
        return {
            msg:"hello vue1.x"
        }
    }
});
