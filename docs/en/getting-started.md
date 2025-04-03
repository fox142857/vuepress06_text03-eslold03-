---
sidebar: false
---

# Get Started

Please select a project to learn more:

<div class="features">
  <div class="feature" onclick="window.location.href='/vuepress05_text03-eslold03-/en/getting-started/OBM.html'">
    <img src="/ico/obm-logo.svg" alt="OBM Logo" class="feature-logo">
    <h2>OBM</h2>
    <p>OutBound Management<br>ESL Information Entry System</p>
  </div>
  <div class="feature" onclick="window.location.href='/vuepress05_text03-eslold03-/en/getting-started/MDE.html'">
    <img src="/ico/mde-logo.svg" alt="MDE Logo" class="feature-logo">
    <h2>MDE</h2>
    <p>MySQL Data Exporter<br>ESL Data Export Program</p>
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