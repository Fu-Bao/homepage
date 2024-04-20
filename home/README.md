# 최적화 트릭

어차피 웹서버 올리면 plain text 들은 적절한 압축을 할것이므로 svg 를 모두 html 에 넣음. => waterfall 로 인한 레이아웃 미표현 이슈 해결, origin 이슈 해결

png 파일은 webp 로 변환 => 거의 0.1% 크기

# 배포

docker 로 올림
