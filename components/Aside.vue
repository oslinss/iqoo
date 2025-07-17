<template>
    <div class="aside">
        <div class="check">
        <a class="el-icon">
            <ChatLineSquare />
        </a>
        <div class="tip">
            
        </div>
    </div>
    <div class="top">
        <a href="#top" class="el-icon">
            <ArrowUp />
        </a>
    </div>
    </div>
    
</template>

<style scoped>
.aside {
    z-index: 2000;
    position: fixed;
}
.check {
    width: 70px;
    height: 50px;
    position: fixed;
    background-color: rgb(247, 179, 6);
    bottom: 180px;
    right: 50px;
    border-radius: 20px;
}
.top {
    width: 70px;
    height: 50px;
    position: fixed;
    background-color: rgba(109, 102, 102, 0.247);
    bottom: 120px;
    right: 50px;
    border-radius: 20px;
}
.top:hover {
    background-color: rgba(109, 102, 102, 0.71);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.check:hover {
    background-color: rgba(247, 179, 6, 0.489);
    box-shadow: 0 0 10px rgba(242, 239, 239, 0.1);
}
.el-icon {
    color: white;
    font-size: 30px;
    padding:10px 20px;
}
</style>

<script setup>  
import { ArrowUp, ChatLineSquare } from "@element-plus/icons-vue";
</script>