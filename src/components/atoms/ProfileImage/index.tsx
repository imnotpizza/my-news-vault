import { cn } from '@/lib/utils';
import React from 'react';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  className?: string;
}

/**
 * 프로필 등 용 소형 원형 이미지 컴포넌트
 */
export default function ProfileImage({ ...props }: IProps) {
  return <img {...props} className={cn('rounded-full', props.className)} />;
}
