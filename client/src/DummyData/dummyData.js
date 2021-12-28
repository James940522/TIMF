import sabyuck from "../assets/sabyuck.png";
import hwamul from "../assets/hwamul.png";
import pulfill from "../assets/pulfill.jpg";
import grow from "../assets/grow.jpg";

const dummyBusiness = [
  {
    id: 1,
    img: sabyuck,
    title: "새벽배송",
    contents: `팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.`,
  },
  {
    id: 2,
    img: hwamul,
    title: "화물주선",
    contents: `화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.`,
  },
  {
    id: 3,
    img: pulfill,
    title: "풀필먼트",
    contents: `풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다.
        각 화주사별 요구사항을 매뉴얼화해 관리합니다`,
  },
  {
    id: 4,
    img: grow,
    title: "그로서리",
    contents: `급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.`,
  },
];

const dummyFooter = [
  {
    id: 1,
    title: `Timf`,
    contents: [
      `상호명: (주)팀프레시`,
      `사업자등록번호: 561-88-01138`,
      `대표자: 이성일`,
    ],
  },
  {
    id: 2,
    title: `Contact us`,
    contents: [
      `Tel: 02-423-0525`,
      `Fax: 02-3432-0525`,
      `E-mail: info@timf.co.kr`,
      `서울특별시 송파구 위례성대로 12길 15-1`,
    ],
    Inquiry: [`영업 및 제휴 문의:`, `E-mail: sales@timf.co.kr`],
  },
  {
    id: 3,
    title: `Others`,
    contents: [
      `인재채용`,
      `서비스 소개`,
      `개인정보 처리방침`,
      `위치기반 서비스 이용약관`,
    ],
  },
];

export { dummyBusiness, dummyFooter };
