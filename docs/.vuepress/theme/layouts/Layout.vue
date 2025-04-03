<script setup>
import { usePageData } from '@vuepress/client'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

const page = usePageData()
const frontmatter = computed(() => page.value.frontmatter)

const showBackToTop = ref(false)
const animateFooter = ref(false)

// 监听滚动事件，决定是否显示回到顶部按钮
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
  
  // 当页面滚动到底部时，触发页脚动画
  const scrollPosition = window.scrollY + window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  
  if (documentHeight - scrollPosition < 100) {
    animateFooter.value = true
  }
}

// 回到顶部功能
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 页面加载时和卸载时的生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="global-footer" :class="{ 'animate': animateFooter }">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/ico/main-logo.svg" alt="Logo" class="footer-icon" />
            <span class="footer-brand">Gardenia</span>
          </div>
          <div class="footer-links">
            <div class="footer-link-group">
              <h3>文档</h3>
              <ul>
                <li><a href="/getting-started.html">快速上手</a></li>
                <li><a href="/introduction.html">项目简介</a></li>
              </ul>
            </div>
            <div class="footer-link-group">
              <h3>项目</h3>
              <ul>
                <li><a href="/introduction/OBM.html">OBM</a></li>
                <li><a href="/introduction/MDE.html">MDE</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>MIT Licensed | Copyright © 2024-present Gardenia</p>
        </div>
      </div>
    </template>
  </ParentLayout>
  
  <!-- 回到顶部按钮 -->
  <div class="back-to-top" v-if="showBackToTop" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" fill="currentColor"/>
    </svg>
  </div>
</template>

<style>
.global-footer {
  padding: 2rem 0 0;
  border-top: 1px solid var(--c-border);
  color: var(--c-text);
  background-color: var(--c-bg);
  margin-top: 2rem;
  transition: all 0.5s ease;
  opacity: 0.9;
}

.global-footer.animate {
  animation: footerPulse 1.5s ease;
}

@keyframes footerPulse {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0.9; }
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.footer-icon {
  width: 36px;
  height: 36px;
  margin-right: 10px;
}

.footer-brand {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--c-text);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.footer-link-group h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--c-text);
  border-bottom: none;
}

.footer-link-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link-group li {
  margin-bottom: 0.5rem;
}

.footer-link-group a {
  color: var(--c-text-lighter);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link-group a:hover {
  color: var(--c-brand);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--c-border);
  font-size: 0.9rem;
  color: var(--c-text-lighter);
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--c-brand);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.back-to-top:hover {
  transform: translateY(-5px);
  background-color: var(--c-brand-light);
}

@media (max-width: 719px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-links {
    gap: 2rem;
  }
}
</style> 