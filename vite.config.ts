import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 배포를 위한 base path 설정
  // 개발 모드: '/' (로컬 개발 서버)
  // 프로덕션 빌드 (GitHub Actions): 리포지토리 이름 기반 경로 (예: '/hw2/')
  // 프로덕션 빌드 (로컬): 상대 경로 ('./')
  base: process.env.NODE_ENV === 'production'
    ? (process.env.GITHUB_REPOSITORY 
        ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
        : './')
    : '/',
})
