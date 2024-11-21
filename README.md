# HyeEum

<h2>SW 경진대회 및 Jump-UP 동아리로 시작하게 된 프로젝트</h2>

<hr/>

<h3>1. 사용 기술스택 및 팀 구성</h3>
<ul>
  <li><strong>사용 기술스택</strong>:
    <ul>
      <li>React: 사용자 인터페이스(UI) 개발을 위한 컴포넌트 기반의 프론트엔드 라이브러리</li>
      <li>OpenAI API: ChatGPT를 활용한 대화형 기능 및 DALL·E를 이용한 이미지 생성</li>
      <li>Spring: 서버와의 데이터 통신 및 API 개발을 위한 백엔드 프레임워크</li>
      <li>PWA: 모바일 웹 환경에서도 네이티브 앱과 같은 경험을 제공하는 Progressive Web Application</li>
      <li>Module CSS: 효율적이고 유지보수가 쉬운 컴포넌트 스타일링</li>
    </ul>
  </li>
  <li><strong>팀 구성</strong>:
    <ul>
      <li>백엔드 개발자: 채성수 (API 설계 및 데이터 처리 담당)</li>
      <li>백엔드 개발자: 육종범 (서버 최적화 및 데이터베이스 설계)</li>
      <li>WEB 및 안드로이드 프론트엔드 개발자: 옥주용 (메인 UI 및 UX 설계)</li>
      <li>WEB 및 안드로이드 프론트엔드 개발자: 김영권 (기능 구현 및 디버깅 담당)</li>
      <li>IOS 개발자: 길지훈 (iOS 플랫폼 연동 및 최적화)</li>
    </ul>
  </li>
</ul>

<hr/>

<h3>2. 현재 상황 및 문제제기</h3>
<p><strong>일기 작성의 중요성:</strong> 일기를 쓰는 것은 단순한 기록 활동을 넘어, 정신건강과 웰빙을 증진시키는 데 매우 중요한 역할을 합니다. 연구에 따르면 일기를 쓰는 사람들은 스트레스와 불안을 더 효과적으로 관리하며, 자신의 감정을 잘 이해하고 조절할 수 있습니다.</p>

<p>그러나 실제로 현대 사회에서 일기를 쓰는 사람의 비율은 매우 낮습니다. 그 이유는 다음과 같습니다:</p>
<ul>
  <li>일기를 작성할 시간의 부족: 바쁜 일상에서 일기 쓰기가 우선순위에서 밀림</li>
  <li>꾸준한 습관 형성의 어려움: 일기를 쓰는 습관을 들이는 것이 쉽지 않음</li>
  <li>표현의 어려움: 자신의 생각과 감정을 글로 옮기는 것에 대한 부담</li>
</ul>

<p><strong>현실적 문제:</strong> 이러한 이유들로 인해 많은 사람들이 자신의 감정을 효과적으로 관리하지 못하고, 이는 장기적으로 스트레스와 불안 수준을 높이는 결과로 이어질 수 있습니다. 특히 디지털 환경에서 이러한 문제를 해결할 수 있는 도구가 부족한 상황입니다.</p>

<p><strong>HyeEum의 솔루션:</strong></p>
<ul>
  <li>ChatGPT를 활용한 대화형 인터페이스로 사용자에게 친근하고 자연스러운 일기 작성 경험 제공</li>
  <li>DALL·E API를 통해 하루의 일상을 시각적으로 표현, 기록에 재미와 창의성을 더함</li>
  <li>사용자의 감정을 분석하고 수치화하여 정신건강 상태를 직관적으로 파악할 수 있는 기능 제공</li>
</ul>
<p>이러한 솔루션을 통해 HyeEum은 사용자가 일기 작성의 중요성을 체감하고, 지속 가능한 기록 습관을 들일 수 있도록 돕습니다.</p>

<hr/>

<h3>3. 기술 개발에 필요했던 요구사항</h3>
<p>HyeEum 프로젝트를 성공적으로 구현하기 위해 다음과 같은 기술적 요구사항을 충족해야 했습니다:</p>
<ul>
  <li><strong>대화형 인터페이스:</strong> ChatGPT API를 활용하여 자연스러운 대화 흐름을 지원하며, 사용자의 피드백을 즉각적으로 반영할 수 있는 구조 설계</li>
  <li><strong>일기 요약 및 시각화:</strong> 사용자가 작성한 데이터를 요약하고 이를 기반으로 의미 있는 이미지를 생성하기 위해 DALL·E API를 효율적으로 연동</li>
  <li><strong>감정 분석 알고리즘:</strong> 사용자의 감정 데이터를 분석하고 이를 시각화하기 위해 감정 스코어링 및 데이터 처리 알고리즘 개발</li>
  <li><strong>PWA 구현:</strong> 모바일 및 데스크톱 환경 모두에서 원활하게 작동하도록 Progressive Web Application 구조 설계</li>
</ul>

<p>이외에도 사용자 친화적인 UI/UX 설계와 API 통신 성능 최적화 등 다양한 세부적인 요구사항이 포함되었습니다.</p>

<hr/>

<h3>3-1. 데이터베이스 설계</h3>
<img src="https://private-user-images.githubusercontent.com/128788634/388307609-5c79a1b0-a2ab-41a4-b325-e4dfafac36ca.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzIxNDg3OTAsIm5iZiI6MTczMjE0ODQ5MCwicGF0aCI6Ii8xMjg3ODg2MzQvMzg4MzA3NjA5LTVjNzlhMWIwLWEyYWItNDFhNC1iMzI1LWU0ZGZhZmFjMzZjYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyMVQwMDIxMzBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YzI2M2Q3M2FhNjZiMDY1ZDRiOTdhZWE0MWI0OTU4ZTAyM2I0ZDY5MjNlYmQyNGM0ZjZlNTQzZGFmMWY5NDZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.DpEl4rw0oOJz-x77qFBq4ZoUsLLXuAzEd2QmocYaFPw" alt="데이터베이스 설계도" style="width:100%; margin-top:10px;">


<h3>3-2. 시스템 설계도</h3>
<img src="https://private-user-images.githubusercontent.com/128788634/388306159-4bd661be-a5c3-4304-ae11-aa00f276ee4c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzIxNDg0ODUsIm5iZiI6MTczMjE0ODE4NSwicGF0aCI6Ii8xMjg3ODg2MzQvMzg4MzA2MTU5LTRiZDY2MWJlLWE1YzMtNDMwNC1hZTExLWFhMDBmMjc2ZWU0Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyMVQwMDE2MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03Mjc1Y2QxOGIyZGU3YWMyYjhiYmY2ZjVhNTNlNWNhYjFiYzIyZmMwYTE1MDU2ZDFlOTZlMmQxZGUxMzEyNjYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.z2MagisnIJLH8zSNICscRASW2kgrmkLYLfAA4ADqEr8" alt="시스템 설계도" style="width:100%; margin-top:10px;">


<h3>4. 결과물</h3>
<p>HyeEum은 사용자가 일기를 더 쉽고 재미있게 작성하며, 자신의 감정과 정신 상태를 직관적으로 이해할 수 있도록 돕는 도구입니다. 주요 결과물은 다음과 같습니다:</p>
<ul>
  <li><strong>대화형 일기 작성 UI:</strong> React를 기반으로 사용자 경험을 최적화한 직관적인 인터페이스</li>
  <li><strong>일기 요약 및 시각적 표현:</strong> ChatGPT 및 DALL·E API를 통해 생성된 요약과 이미지</li>
  <li><strong>감정 분석 및 시각화:</strong> 사용자의 감정을 수치화하고 이를 기반으로 한 분석 결과 제공</li>
  <li><strong>모바일 최적화:</strong> PWA 구조를 통해 어디서나 쉽게 접근 가능한 환경 제공</li>
</ul>

<p>HyeEum은 단순한 기록 도구를 넘어, 사용자가 자신의 감정을 관리하고 긍정적인 정신 건강을 유지할 수 있도록 지원하는 혁신적인 솔루션으로 자리 잡았습니다.</p>
