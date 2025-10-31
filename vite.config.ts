import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 배포를 위한 base path 설정
  // 리포지토리 이름이 hw2인 경우 '/hw2/'로 설정
  // 도메인 루트에 배포하는 경우 '/' 또는 생략
  base: process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
    : './',
})
