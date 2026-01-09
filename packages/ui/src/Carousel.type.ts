export interface MainItem {
  /** 성인 영화 여부 */
  adult: boolean;
  /** 백드롭 이미지 경로 (null일 수 있음) */
  backdrop_path: string | null;
  /** 영화/TV 쇼 ID */
  id: number;
  /** 제목 */
  title: string;
  /** 언어 */
  original_language: string;
  /** 원제 */
  original_title: string;
  /** 줄거리 요약 */
  overview: string;
  /** 포스터 이미지 경로 (null일 수 있음) */
  poster_path: string | null;
  /** 미디어 타입 (movie 또는 tv) */
  media_type: string;
  /** 장르 ID 목록 */
  genre_ids: number[];
  /** 인기도 점수 */
  popularity: number;
  /** 개봉일 (YYYY-MM-DD 형식) */
  release_date: string;
  /** 비디오 보유 여부 */
  video: boolean;
  /** 평점 평균 */
  vote_average: number;
  /** 투표 수 */
  vote_count: number;
}

export interface MainListResponse {
  page: number;
  results: MainItem[];
  total_pages: number;
  total_results: number;
}
