import { responsive } from '@/styles/responsive';
import styled from 'styled-components';

const SearchInput = styled.input.attrs({ placeholder: '검색어를 입력해주세요' })`
  width: 30.19rem;
  height: 2.5rem;
  border: 0.06rem solid ${(p) => p.theme.Navy.Navy_10};
  border-radius: 0.25rem;
  font-weight: 350;
  font-size: 0.81rem;
  padding-left: 0.94rem;

  &:hover {
    outline: none;
    box-shadow: 0px 0px 0.25rem 0.06rem ${(p) => p.theme.Blue.Blue_L};
  }

  &:focus {
    outline: none;
    border: 0.06rem solid ${(p) => p.theme.Blue.Blue_M};
    box-shadow: 0px 0px 0.25rem 0.06rem ${(p) => p.theme.Blue.Blue_L};
  }

  ${responsive.mobile} {
    width: 100%;
  }
`;

export default SearchInput;
