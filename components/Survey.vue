<template>
    <div>
        <div class="content">
            <div class="title">
                <h1>手机体验评价</h1>
                <p>诚邀您参与问卷调查，建言献策</p>
            </div>
            <div class="introduction">
                <p>尊敬的手机用户：</p>
                <p>iQOO官方特邀宁填答这份问卷，将您真实的感受和建议告诉我们。您所填的全部信息我们将严格保密，只用于内部分析与改进体验使用，不用与任何商业目的。如已知悉，请您开始答题；反之，您可退出此页面。</p>
            </div>
            <div class="button">
                <el-button type="primary">开始答题</el-button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.content {
    position: relative;
    top: 100px;
    left: 25%;
    width: 50%;
    height: auto;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 14px;
    padding: 25px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.title,
.button {
    text-align: center;
}

.button {
    margin-top: 200px;
}

.button .el-button {
    color: white !important;
    text-decoration: none;
    background-color: #415fff !important;
    border: #415fff;
    width: 150px;
}

h1 {
    font-size: 20px;
    color: #303133;
}

p {
    font-size: 15px;
    color:#606266;
}
</style>