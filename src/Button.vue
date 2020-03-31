<template>
<!--    在这个组件中，我们想控制以下图标的位置
        是在左边还是在右边
-->

        <button  class="jbutton">
                <template v-if="isLeft==='true'|| !isLeft">
                        <SymbolIcon name="i-shezhi"></SymbolIcon>
                        1234
                </template>
                <template v-else>
                        1234
                        <SymbolIcon name="i-shezhi"></SymbolIcon>
                </template>
             </button>


</template>

<script>
    import SymbolIcon  from "./SymbolIcon";
    export  default  {
        data(){
            return {

            }
        },
        props:['isLeft'],
        components:{
            //局部注册
            SymbolIcon
        }
    }
</script>

<style>
    /*定义变量的写法*/

    :root{
        --button-height:32px;
        --button-font:14px;
        --button-bgcolor:#fff;
        --button-borcolor:#999;
    }
    /*// 使用变量*/
    .jbutton{
        height: var(--button-height);
        font-size: var(--button-font);
        background-color: var(--button-bgcolor);
        background: 1px solid var(--button-borcolor);
    }
    .jbutton:hover{
        border: 1px solid rgba(153,153,153,1);
    }
</style>