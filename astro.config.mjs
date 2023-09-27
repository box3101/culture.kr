import { defineConfig } from 'astro/config'; // Astro 프로젝트 설정을 정의하는 함수.

export default defineConfig({
  build: { // 빌드 관련 옵션을 설정하는 섹션
    format: 'file', // file로 설정하면, 페이지를 빌드할 때 'page/index.html' 대신 'page.html' 형식으로 파일이 생
    assets: '_custom', // 기본적으로 Astro는 assets라는 폴더에 빌드 시 생성되는 정적 파일들을 저장하지만 이 설정을 통해 원하는 다른 이름의 폴더로 변경
  },
});