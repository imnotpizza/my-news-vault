/** 
 * 에러코드
 * AUTH: 사용자 로그인/로그아웃 관련
 * API: API 호출 관련 (BingAPI, Scrap 등등)
 */
const ERRCODE = {
  AUTH: {
    ALREADY_LOGINED: 10001,
    USER_NOT_FOUND: 10002,
    INVALID_TOKEN: 10003,
  },
  API: {
    NEWS: {
      FETCH_FAILED: 11001,
      FETCH_SCRAPPED_LIST_FAILED: 11002,
      SCRAP_FAILED: 11003,
      UNSCRAP_FAILED: 11004,
    },
    SCRAP: {
      FETCH_FAILED: 12001,
      ADD_FAILED: 12002,
      DELETE_FAILED: 12003,
    }
  },
  NETWORK_ERROR: 20000,
  TIMEOUT_ERROR: 20001,
  UNKNOWN: 99999,
} as const;
type ERRCODE = (typeof ERRCODE)[keyof typeof ERRCODE];

export default ERRCODE;
