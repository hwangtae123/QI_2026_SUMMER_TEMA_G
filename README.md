# UCSD QI 2026 Summer — Team G

팀 홍보 및 멤버 소개 웹페이지.

## 구조
```
index.html        # 페이지 뼈대 (Hero / About / Members / Contact)
css/style.css     # 스타일
js/members.js     # ★ 멤버 정보 데이터 (여기만 수정하면 됨)
js/main.js        # 멤버 카드 자동 생성 로직
assets/           # 멤버 사진 등 이미지 넣는 곳
```

## 멤버 정보 수정하기
[js/members.js](js/members.js) 파일의 `MEMBERS` 배열에서 각 사람의
`role`(역할), `bio`(한 줄 소개), `photo`(사진 경로), `links`(링크)를 채우세요.

사진은 `assets/` 폴더에 넣고 `photo: "assets/파일명.jpg"` 형태로 지정합니다.

## 실행
파일을 브라우저로 열거나, 로컬 서버로 확인:
```
python -m http.server 8000
```
→ 브라우저에서 http://localhost:8000 접속
