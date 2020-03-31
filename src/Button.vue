<template>
        <button class="jbutton">
                <SymbolIcon name="i-shezhi"></SymbolIcon>
                1234</button>
</template>

<script>
    import SymbolIcon  from "./SymbolIcon";
    export  default  {
        data(){
            return {

            }
        },
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