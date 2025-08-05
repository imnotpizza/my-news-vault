module.exports = {
  // 배포 대상에 대한 설정
  apps: [
    {
      name: 'mnv-prod', // pm2 instance 이름
      // script args 로 명령어 실행
      script: 'yarn', // yarn 혹은 npm 혹은 다른 것도 가능
      args: 'start:st', // 실행할 scripts
      exec_mode: 'cluster', // fork 혹은 cluster, 어떤 모드인지는 공식 문서 참조
      interpreter: 'bash', // next.js와 pm2 사용시 interpreter 설정
      watch: 'true', // 파일 변경 감지
      ignore_watch: ['node_modules'], // node_modules는 변경 감지 하지 않음
    },
  ],
};
