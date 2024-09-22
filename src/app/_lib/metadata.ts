import { Metadata, ResolvingMetadata } from 'next';

export const createMetadataObj = (meta?: Metadata): Metadata => {
  return {
    title: 'My News Vault',
    description: 'news scrap',
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
