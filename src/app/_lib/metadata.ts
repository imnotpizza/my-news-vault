import appinfo from '@/constants/appinfo';
import { Metadata, ResolvingMetadata } from 'next';

export const createMetadataObj = (meta?: Metadata): Metadata => {
  return {
    title: appinfo.app_name,
    description: appinfo.app_desc,
    viewport: 'initial-scale=1.0, width=device-width',
    openGraph: {
      title: appinfo.app_name,
      description: appinfo.app_desc,
      type: 'website',
      url: appinfo.app_url,
      images: [
        {
          url: '/og-thumbnail.png',
          width: 800,
          height: 600,
        },
      ],
    },
    icons: {
      icon: '/favicon.ico',
    },
    ...meta,
  };
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 동적 seo 처리
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   return createMetadataObj();
// }
