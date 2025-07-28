<template>
  <div>
    <div class="footer">
      <div class="footer-container">
        <div class="footer-links">
          <div class="link-left">
            <!-- 循环渲染链接 -->
            <div>
              <ul>
                <p>热门链接</p>
                <li
                  v-for="(item, index) in FooterData.data.slice(0, 9)"
                  :key="index"
                >
                  <a :href="item.url">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <p>在线购买</p>
                <li
                  v-for="(item, index) in FooterData.data.slice(9, 14)"
                  :key="index + 9"
                >
                  <a :href="item.url">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <p>服务支持</p>
                <li
                  v-for="(item, index) in FooterData.data.slice(14, 22)"
                  :key="index + 14"
                >
                  <a :href="item.url">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <p>社区</p>
                <li
                  v-for="(item, index) in FooterData.data.slice(22, 24)"
                  :key="index + 22"
                >
                  <a :href="item.url">{{ item.label }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="link-right">
            <div class="contact-item" id="online">
              <el-icon color="#aea0c1" :size="20" class="el-icon"
                ><ChatLineRound
              /></el-icon>
              <span>在线客服</span>
            </div>
            <div class="contact-item" id="call">
              <span>
                <el-icon color="#aea0c1" :size="20" class="el-icon"
                  ><Phone
                /></el-icon>
                7*24小时服务热线</span
              >
              <p>95033</p>
            </div>

            <div class="contact-item" id="survey">
              <el-icon color="#aea0c1" :size="20" class="el-icon"
                ><DocumentChecked
              /></el-icon>
              <span>满意度调查</span>
            </div>

            <div class="follow-us">
              <el-icon color="#aea0c1" :size="20" class="el-icon"
                ><FolderAdd
              /></el-icon>
              <span>关注我们</span>
            </div>
            <!-- 循环渲染社交图标 -->
            <div class="social-icons">
              <div
                class="social-item"
                :class="item.name"
                v-for="(item, index) in CodeData.data"
                :key="index"
              >
                <a :href="item.link || 'javascript:;'">
                  <img
                    class="normal-img"
                    :src="item.normalImg"
                    :alt="item.altNormal"
                  />
                  <img
                    class="hover-img"
                    :src="item.hoverImg"
                    :alt="item.altHover"
                  />
                </a>

                <!-- 条件渲染二维码-->
                <div :class="`${item.name}-code`" v-if="item.codeImg">
                  <img :src="item.codeImg" :alt="item.codeAlt" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divided"></div>
        <p class="ps">
          Copyright ©2011-2025 维沃移动通信有限公司 版权所有 保留一切权利 |
          粤ICP备 17035209号 | 粤公网安备 44190002004194号
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  width: 100%;
  margin: 0 auto; /*水平居中*/
}

.footer {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 18px;
  background-color: #242933;
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
.footer-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 16px;
  flex-wrap: wrap;
  color: #8c919b;
}
.footer-links .link-left {
  display: flex;
  flex-direction: row;
  padding: 10px;
}
.footer-links .link-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  margin-right: 80px;
  margin-top: 20px;
}
.link-right p {
  color: white;
  font-size: 26px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
}
.footer-links a {
  color: #c2c5cc;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  margin-top: 30px;
  padding: 10px 0;
}
.footer-links a:hover {
  color: #f0b31c;
  text-decoration: underline;
}
ul {
  margin-bottom: 10px;
  font: 16px solider;
  line-height: 18px;
  color: white;
  margin: 10px 0;
}

ul p {
  margin-bottom: 25px;
}

li {
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
}
.ps {
  color: #c2c5cc;
  font-size: 12px;
  font-weight: 700;
  padding: 20px;
  margin-left: 40px;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 20px;
  margin-left: 25px;
}

.social-item {
  position: relative;
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.social-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

.social-item .hover-img {
  opacity: 0;
}

.social-item:hover .normal-img {
  opacity: 0;
}

.social-item:hover .hover-img {
  opacity: 1;
}

.follow-us {
  margin-top: 20px;
  display: flex;
  align-items: center;
  color: #8c919b;
  font-size: 15px;
}

.follow-us .el-icon {
  margin-right: 8px;
}

/* 二维码样式 */
[class$="-code"] {
  position: absolute;
  bottom: 150%; /* 显示在图标上方 */
  transform: translateX(-200%); /* 水平居中 */
  display: none;
  background: white;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  margin-bottom: 90px; /* 与图标的距离 */
}

[class$="-code"] img {
  width: 120px;
  height: 120px;
  display: block;
}

/* 鼠标悬停时显示二维码 */
.social-item:hover [class$="-code"] {
  display: block;
  animation: fadeIn 0.3s ease;
}


.contact-item {
  width: 160px;
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}

/* 平板及以上 */
@media (max-width: 1023px) {
  .footer-links .link-left {
    flex-direction: row;
    gap: 20px;
    margin-right: 0;
  }

  .footer-links .link-right {
    margin-top: 20px;
    margin-right: 0;
  }

  .footer-links {
    justify-content: space-between;
    padding: 0 20px;
  }
}

/* 手机竖屏 */
@media (max-width: 767px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  .footer-links .link-left {
    flex-direction: column;
    width: 100%;
    margin-right: 0;
  }

  .footer-links .link-right {
    width: 100%;
    margin-top: 20px;
    padding: 0;
  }

  ul {
    font-size: 14px;
  }

  li {
    margin-bottom: 8px;
  }

  .ps {
    font-size: 10px;
    padding: 10px;
  }
}

.divided {
  width: 90%;
  border-bottom: #a0aec052 1px solid;
  margin: 10px 60px;
}

#online:hover,
#survey:hover {
  color: #f0b31c;
  cursor: pointer;
}

#call {
  display: flex;
  flex-direction: column;
}

.el-icon {
  color: #aea0c1;
  font-size: 20px;
}
</style>

<script setup>
import {
  ChatLineRound,
  Phone,
  FolderAdd,
  DocumentChecked,
} from "@element-plus/icons-vue";
import CodeData from '../src/assets/data/CodeData.json';
import FooterData from '../src/assets/data/FooterData.json';
</script>
