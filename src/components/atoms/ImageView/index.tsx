import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// type TImageProps = Parameters<typeof Image>[0];

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * 이미지 컴포넌트
 * @param props 이미지 속성
 * FIXME: next/image적용, 현재 외부이미지를 못읽어 문제발생
 */
export default function ImageView({ className, ...props }: IProps) {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className={cn('w-full relative', className)}>
      <img
        {...props}
        onError={() => setIsError(true)}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full"
      />
      {!isLoaded && <div className="absolute top-0 left-0 w-full h-full bg-gray-100 z-10" />}
      {/* TODO: 이미지 */}
      {isError && <div className="absolute bottom-0 left-0 w-full h-full bg-gray-100 z-20" />}
    </div>
  );
}
