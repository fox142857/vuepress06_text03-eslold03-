---
sidebar: false
---

# 快速上手

请选择要了解的项目：

<div class="features">
  <div class="feature" onclick="window.location.href='/vuepress06_text03-eslold03-/getting-started/OBM.html'">
    <img src="/ico/obm-logo.svg" alt="OBM 图标" class="feature-logo">
    <h2>OBM</h2>
    <p>出库管理系统<br>ESL 信息录入</p>
  </div>
  <div class="feature" onclick="window.location.href='/vuepress06_text03-eslold03-/getting-started/MDE.html'">
    <img src="/ico/mde-logo.svg" alt="MDE 图标" class="feature-logo">
    <h2>MDE</h2>
    <p>数据导出程序<br>ESL 数据导出</p>
  </div>
</div>

<style>
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: var(--c-bg);
}

.feature:hover {
  transform: translateY(-5px);
  border-color: var(--c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.feature h2 {
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-brand);
  margin: 0.5rem 0;
}

.feature p {
  color: var(--c-text);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 719px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style> 