import React from 'react';
import Image from 'next/image';

type TImageProps = Parameters<typeof Image>[0];

interface IProps extends TImageProps {}

/**
 * 이미지 컴포넌트
 * @param props 이미지 속성
 * TODO: Next Image 적용
 */
export default function ImageView({ ...props }: IProps) {
  return <Image alt={props.alt} {...props} />;
}
