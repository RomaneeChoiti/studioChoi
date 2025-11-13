import image1 from "../../assets/images/artwork15/1.png";
import importImages from "../../utils/importImages";
import ARTWORK_KEYWORDS from "../keywords";

const ArtWork = {
  keywords: ARTWORK_KEYWORDS['ArtWork-Untitled-project-no-15'],
  startDate: "2025-10-30",
  endDate: null,
  id: "ArtWork-Untitled-project-no-15",
  title: "Relationality / Orbit 03",
  year: "2025",
  projectNo: "15",
  platform: ["웹 인터렉티브 아트 및 평면 변형 시리즈 (디지털 프린트)"],
  description: "",
  features: [],
  additionalInfo: "",
  size: "가변 크기, 최대 4K 해상도 (4K 해상도 기준 제작)",
  image: image1,
  images: importImages("artwork15", 4),
  // video: "https://youtu.be/e16cDdnN1ek",
  VideoOverview: ["이 작품은 두 개의 화면으로 구성되어 있으며, 관람자는 그 중앙에서 양쪽의 이미지를 동시에 마주하는 형태로 감상하게 된다.",
  "두 개의 구가 상승과 하강을 반복하며, 관람자는 그 사이에 위치해 두 구의 공전 관계에 영향을 미친다.",
  "관람자의 존재는 작품 내 균형의 축으로 작용한다."],
  link: "/works/ArtWork-Untitled-project-no-15",
  // ArtWorkLink: "https://project-11-l19nz5eak-choidevs-projects.vercel.app/",
};

export default ArtWork;
