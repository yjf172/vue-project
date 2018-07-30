<template>
    <div class="header flow">
        <div class="fl">
            <img src="../../assets/logo.png" alt="">
        </div>
        <div class="fr">
            <div class="flow">
                <ul class="topHref liFloat fr">
                    <li><a href="">로그인</a></li>
                    <li><a href="">회원가입</a></li>
                    <li><a href="">마이페이지</a></li>
                    <li><a href="">장바구니</a></li>
                    <li><a href="">주문배송조회</a></li>
                    <li><a href="">고객센터</a></li>
                </ul>
            </div>
            <ul class="titleHref liFloat flow">
                <li><a href="">design</a></li>
                <li><span>/</span><a href="">enjoy</a></li>
                <li><span>/</span><a href="">living</a></li>
                <li><span>/</span><a href="">fashion</a></li>
                <li><span>/</span><a href="">brand shop</a></li>
                <li><span>/</span><a href="">event</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    @import "../../common/css/common.css";
    .header{
        padding: 14px 0 10px 0;
    }
    .topHref{
        line-height: 1;
    }
    .topHref li a{
        padding: 0 10px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .topHref li a:hover{
        color: #709e00;
    }
    .topHref li a:first-child{
        border-left: 0;
    }
    .titleHref{
        line-height: 40px;
        margin-top: 8px;
        background: url("../../assets/hrefBg.png");
        border-radius: 15px;
        padding: 0 12px 0 15px;
        color: #fff;
    }
    .titleHref a{
        padding: 0 32px;
        color: #fff;
    }
</style>

<script>
    export default {

    }
</script>