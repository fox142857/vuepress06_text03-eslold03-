<script setup>
import { usePageFrontmatter } from '@vuepress/client'

const frontmatter = usePageFrontmatter()
</script>

<template>
  <main class="home">
    <div class="background-container">
      <img v-if="frontmatter.heroImage" :src="frontmatter.heroImage" :alt="frontmatter.heroAlt" class="background-image">
    </div>
    <header class="hero">
      <h1 v-if="frontmatter.heroText" id="main-title">{{ frontmatter.heroText }}</h1>
      <p v-if="frontmatter.tagline" class="description">{{ frontmatter.tagline }}</p>
      <p v-if="frontmatter.actions" class="actions">
        <a v-for="action in frontmatter.actions" :key="action.text" :href="action.link" class="action-button" :class="[action.type]">
          {{ action.text }}
        </a>
      </p>
    </header>

    <div v-if="frontmatter.features" class="features">
      <div v-for="feature in frontmatter.features" :key="feature.title" class="feature">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <div class="theme-default-content custom">
      <Content />
    </div>

    <div v-if="frontmatter.footer" class="footer">
      {{ frontmatter.footer }}
    </div>
  </main>
</template>

<style scoped>
.home {
  padding: var(--navbar-height) 2rem 0;
  max-width: 100%;
  margin: 0px auto;
  display: block;
  position: relative;
  min-height: 100vh;
}

.background-container {
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.15;
}

.hero {
  text-align: center;
  padding: 4rem 0;
}

#main-title {
  font-size: 3.5rem;
  color: var(--c-text);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.description {
  max-width: 35rem;
  font-size: 1.8rem;
  line-height: 1.3;
  color: var(--c-text);
  margin: 1.8rem auto;
}

.action-button {
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  text-decoration: none;
  margin: 0.5rem;
  font-weight: 500;
}

.action-button.primary {
  color: var(--c-bg);
  background-color: var(--c-brand);
}

.action-button.primary:hover {
  background-color: var(--c-brand-light);
  transform: translateY(-2px);
}

.action-button.secondary {
  color: var(--c-brand);
  background-color: var(--c-bg);
  border-color: var(--c-brand);
}

.action-button.secondary:hover {
  color: var(--c-brand-light);
  border-color: var(--c-brand-light);
  transform: translateY(-2px);
}

.features {
  border-top: 1px solid var(--c-border);
  padding: 2.5rem 2rem;
  margin: 2.5rem auto;
  max-width: var(--homepage-width);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background-color: var(--c-bg);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature {
  text-align: center;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--c-border);
  border-radius: 8px;
}

.feature:hover {
  transform: translateY(-5px);
  border-color: var(--c-brand);
}

.feature h2 {
  font-size: 1.4rem;
  font-weight: 600;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-text);
  margin-bottom: 1rem;
  white-space: pre-wrap !important;
  display: block;
}

.feature p {
  color: var(--c-text);
  line-height: 1.6;
  flex-grow: 1;
  white-space: pre-wrap !important;
  margin: 0;
  display: block;
}

.footer {
  padding: 2.5rem;
  border-top: 1px solid var(--c-border);
  text-align: center;
  color: var(--c-text);
  background-color: var(--c-bg);
}

@media (max-width: 719px) {
  .features {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
}

@media (max-width: 520px) {
  .hero {
    padding: 2rem 0;
  }

  #main-title {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.4rem;
  }

  .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }

  .feature h2 {
    font-size: 1.25rem;
  }
}
</style>