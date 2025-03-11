import ERRCODE from '@/constants/errCode';

/**
 * My News Vault 커스텀 에러
 */
class APIError extends Error {
  private _errCode: ERRCODE;

  constructor(errCode: ERRCODE) {
    super('ERROR ::' + errCode);
    this.name = 'APIError';
    this._errCode = errCode;
  }

  get errCode() {
    return this._errCode;
  }
  // TODO: gpt 자동생성 문구, 어색한 부분 재작성
  get msgFromCode(): string {
    switch (this._errCode) {
      case ERRCODE.AUTH_ALREADY_LOGINED:
        return '이미 로그인 되어 있습니다.';
      case ERRCODE.AUTH_USER_NOT_FOUND:
        return '사용자 정보를 찾을 수 없습니다.';
      case ERRCODE.AUTH_INVALID_TOKEN:
        return '유효하지 않은 토큰입니다.';
      case ERRCODE.NEWS_FETCH_FAILED:
        return '뉴스를 불러오는데 실패했습니다.';
      case ERRCODE.NEWS_FETCH_SCRAPPED_LIST_FAILED:
        return '스크랩한 뉴스를 불러오는데 실패했습니다.';
      case ERRCODE.NEWS_SCRAP_FAILED:
        return '뉴스 스크랩에 실패했습니다.';
      case ERRCODE.NEWS_UNSCRAP_FAILED:
        return '뉴스 스크랩 해제에 실패했습니다.';
      case ERRCODE.SCRAP_FETCH_FAILED:
        return '스크랩을 불러오는데 실패했습니다.';
      case ERRCODE.SCRAP_ADD_FAILED:
        return '스크랩 추가에 실패했습니다.';
      case ERRCODE.SCRAP_DELETE_FAILED:
        return '스크랩 삭제에 실패했습니다.';
      case ERRCODE.NETWORK_ERROR:
        return '네트워크 에러가 발생했습니다.';
      case ERRCODE.TIMEOUT_ERROR:
        return '요청 시간이 초과되었습니다.';
      case ERRCODE.NEWS_FETCH_NOT_FOUND:
        return '';
      case ERRCODE.UNKNOWN:
        return '알 수 없는 에러가 발생했습니다.';
      default:
        return '알 수 없는 에러가 발생했습니다.';
    }
  }
}

export default APIError;
