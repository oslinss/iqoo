<template>
  <div>
    <div class="footer">
    <div class="footer-container">
      <div class="footer-links">
        <div class="link-left">
          <div>
            <ul>
              <p>热门链接</p>
              <li>
                <a href="https://www.vivo.com.cn/vivo/iqooneo10proplus/"
                  >iQOO Neo 10 Pro+</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/vivo/iqooz10turbopro/"
                  >iQOO Z10 Turbo Pro</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/vivo/iqooz10turbo/"
                  >iQOO Z10 Turbo</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/vivo/iqooz10x/">iQOO Z10x</a>
              </li>
              <li>
                <a href="https://www.vivo.com.cn/vivo/iqooz9turbocxh/"
                  >iQOO Z9 Turbo 长续航版</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/vivo/iqooneo10pro/"
                  >iQOO Neo10 Pro</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/vivo/iqooneo10/">iQOO Neo10</a>
              </li>
              <li>
                <a href="https://yun.vivo.com.cn/home#/welcome">查找手机</a>
              </li>
              <li>
                <a href="https://www.vivo.com.cn/service/questions/all"
                  >常见问题</a
                >
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p>在线购买</p>
              <li><a href="https://shop.vivo.com.cn/">官方商城</a></li>
              <li>
                <a href="https://shop.vivo.com.cn/product/phone">选购手机</a>
              </li>
              <li>
                <a href="https://shop.vivo.com.cn/product/parts">选购配件</a>
              </li>
              <li>
                <a href="https://shopact.vivo.com.cn/pcspace/wk230228168160f4"
                  >以旧换新</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/service/vivocare">保障服务</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p>服务支持</p>
              <li>
                <a href="https://www.vivo.com.cn/service.html">服务首页</a>
              </li>
              <li>
                <a href="https://www.vivo.com.cn/service/map.html"
                  >服务网点查询</a
                >
              </li>
              <li>
                <a href="https://support.vivo.com.cn/service/authenticityCheck"
                  >真伪查询</a
                >
              </li>
              <li>
                <a
                  href="https://passport.vivo.com.cn/#/login?client_id=30&redirect_uri=https%3A%2F%2Fwww.vivo.com%2Fservice%2Fappointment"
                  >预约维修</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/service/accessory"
                  >维修配件价格</a
                >
              </li>
              <li>
                <a href="https://www.vivo.com.cn/service/policy">服务政策</a>
              </li>
              <li>
                <a
                  href="https://ai-h5.vivo.com.cn/special-questionnairev2/index.html?id=3125&sign=c99009cd5dd1ff78caf9fae7a101e651#/"
                  >NPS调研</a
                >
              </li>
              <li><a href="https://live.vivo.com/">游戏直播助手</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <p>社区</p>
              <li>
                <a href="https://bbs.vivo.com.cn/newbbs/forums/24">酷客之家</a>
              </li>
              <li><a href="https://weibo.com/u/6960161079">微博</a></li>
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
          <div class="contact-item" id="call"><span>
            <el-icon color="#aea0c1" :size="20" class="el-icon"
              ><Phone
            /></el-icon>
              7*24小时服务热线</span>
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

          <div class="social-icons">
            <div class="social-item weibo">
              <a href="https://weibo.com/u/6960161079">
                <img
                  class="normal-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1681722323124/d0443d0203f91e35524f4a66a1b37ddc.svg"
                  alt="微博默认"
                />
                <img
                  class="hover-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1681722315942/3e5169d556ea5dc6e077cdae2bb5f7d3.svg"
                  alt="微博hover"
                />
              </a>
            </div>
            <div class="social-item wechat">
              <a>
                <img
                  class="normal-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1681722335462/1eba40083260db627e99313d32a49d23.svg"
                  alt="微信默认"
                />
                <img
                  class="hover-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1681722338508/a92f55dfe8cd0bbc7e343ea751bbc34f.svg"
                  alt="微信hover"
                />
              </a>
              <div class="wechat-code">
                <img
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516961231/180550595baa1cc834ee0dbf9d3ba3fb.png"
                  alt="微信公众号"
                />
              </div>
            </div>

            <div class="social-item chat">
              <a>
                <img
                  class="normal-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1681722373682/239b7ed07cd88505ba63c447aa88e061.svg"
                  alt="支付宝"
                />
                <img
                  class="hover-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1681722384166/687c37ce112ac27eb54aadc8a8f305e8.svg"
                  alt="支付宝hover"
                />
              </a>

              <div class="chatcode">
                <img
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720517016000/bd8bd5287f32604de316ddb0b55d21b7.png"
                  alt="支付宝"
                />
              </div>
            </div>

            <div class="social-item bilibili">
              <a>
                <img
                  class="normal-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516307673/fc74e7ce75f214464678da17fd75ffd8.svg"
                  alt="bilibili"
                />
                <img
                  class="hover-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516310167/bcaea48f5d6965611489fffc23040272.svg"
                  alt="bilibilihover"
                />
              </a>
              <div class="bilibili-code">
                <img
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516568339/65cae1a19dd6864bfb70cf8b042a302b.png"
                  alt="bilibili"
                />
              </div>
            </div>

            <div class="social-item tiktok">
              <a>
                <img
                  class="normal-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516377604/535bb5656a8228e3e3957f61e5a637af.svg"
                  alt="抖音"
                />
                <img
                  class="hover-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516380846/3ac9cbce788b2c819f3cb0be5ab65c40.svg"
                  alt="抖音hover"
                />
              </a>
              <div class="tiktok-code">
                <img
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516577228/d818c7ba05035bdf8bcc40bed69acd10.png"
                  alt="抖音"
                />
              </div>
            </div>

            <div class="social-item xhs">
              <a>
                <img
                  class="normal-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516401829/b13fd57ea492ac829ca584098009bf07.svg"
                  alt="小红书"
                />
                <img
                  class="hover-img"
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516403877/4913c9f786025d6ec7a536a6a279ab8f.svg"
                  alt="小红书hover"
                />
              </a>
              <div class="xhs-code">
                <img
                  src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1720516586019/5f67242bfbffc5bd4fc737208ca46b6e.png"
                  alt="小红书"
                />
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
  margin-right: 80px;
  margin-top: 20px; 
}
.link-right p {
  color: white;
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}
.footer-links a {
  color: #8c919b;
  font: 13px bold;
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
  color: #8c919b;
  font-size: 12px;
  padding: 20px;
  margin-left: 60px;
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

/* 微信二维码样式 */
.wechat-code,
.chatcode,
.bilibili-code,
.tiktok-code,
.xhs-code {
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

.wechat-code img,
.chatcode img,
.bilibili-code img,
.tiktok-code img,
.xhs-code img {
  width: 120px;
  height: 120px;
  display: block;
}

/* 鼠标悬停时显示二维码 */
.social-item.wechat:hover .wechat-code,
.social-item.chat:hover .chatcode,
.social-item.bilibili:hover .bilibili-code,
.social-item.tiktok:hover .tiktok-code,
.social-item.xhs:hover .xhs-code {
  display: block;
  animation: fadeIn 0.3s ease;
}

.contact-item {
  width: 160px;
  display: flex;
  gap:5px;
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
    align-items: flex-start;
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
</script>

