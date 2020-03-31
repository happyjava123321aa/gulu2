<template>
<!--    在这个组件中，我们想控制以下图标的位置
        是在左边还是在右边
        我们采用flex 布局来解决位置问题
-->

        <button  :class="['jbutton',{'isRight':positionType==='right'}]">
                        <SymbolIcon class="sbIcon" :name="name"></SymbolIcon>
            <span class="jbutton-content"> <slot ></slot></span>
        </button>


</template>

<script>
    import SymbolIcon  from "./SymbolIcon";
    export  default  {
        data(){
            return {

            }
        },
        props:{
                name: {
                        type: String,
                        default: "i-you"
                },
                positionType: {
                    type: String,
                    default: "left"
                }
        }
        ,
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
        display: flex;
        align-items:center
    }
    .jbutton .sbIcon{
            order:10;
            margin-right: .3em;

    }

    .jbutton .jbutton-content{
            order:20
    }

   .jbutton:hover{
        border: 1px solid rgba(153,153,153,1);
    }

    .isRight  .sbIcon{
        order:20; margin-left: .5em;
    }
    .isRight .jbutton-content{
        order:10;


    }

</style>