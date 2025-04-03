---
sidebar: false
---

# 下载

点击卡片下载安装程序：

<div class="downloads">
  <div class="row">
    <div class="card" onclick="window.location.href='https://github.com/fox142857/vuepress03_text03-eslold03-/releases/download/OBM-v1.0.0/OutboundManagementSetup.exe'">
      <img src="/ico/obm-logo.svg" alt="OBM 图标" class="card-logo">
      <h2>OBM</h2>
      <p>出库管理系统</p>
      <div class="download-button">下载</div>
    </div>
    <div class="card" onclick="window.location.href='https://github.com/fox142857/vuepress03_text03-eslold03-/releases/download/MDE-v1.0.0/MySQL-Data-Exproter_Installer.exe'">
      <img src="/ico/mde-logo.svg" alt="MDE 图标" class="card-logo">
      <h2>MDE</h2>
      <p>数据导出程序</p>
      <div class="download-button">下载</div>
    </div>
  </div>
  <div class="row centered">
    <div class="card" onclick="window.location.href='https://github.com/fox142857/vuepress03_text03-eslold03-/releases/download/Tetris-v1.0.0/Tetris_Installer.exe'">
      <img src="/ico/tetris-logo.svg" alt="Tetris 图标" class="card-logo">
      <h2>Tetris</h2>
      <p>俄罗斯方块游戏</p>
      <div class="download-button">下载</div>
    </div>
  </div>
</div>

<style>
.downloads {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.row {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.row.centered {
  justify-content: center;
}

.card {
  flex: 0 0 calc(50% - 2rem);
  max-width: 400px;
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

.card:hover {
  transform: translateY(-5px);
  border-color: var(--c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.card h2 {
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-brand);
  margin: 0.5rem 0;
}

.card p {
  color: var(--c-text);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.download-button {
  background-color: var(--c-brand);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.card:hover .download-button {
  background-color: var(--c-brand-light);
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
  
  .card {
    flex: 0 0 100%;
    width: 100%;
  }
}
</style> 