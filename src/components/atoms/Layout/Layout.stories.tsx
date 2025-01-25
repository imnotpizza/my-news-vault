/* eslint-disable react/no-unescaped-entities */
import { Meta, StoryObj } from '@storybook/react';
import Layout from '.';

const SampleLayout = ({ sticky }: { sticky: boolean }) => {
  return (
    <>
      <div className="w-full h-[500px] overflow-y-scroll">
        <Layout className="h-auto">
          <Layout.Header className="bg-gray-300" sticky={sticky}>
            <div className="w-full h-full border border-black border-solid">
              header
            </div>
          </Layout.Header>
          <Layout.Body>
            <p className="mb-4">==================== Lorem Ipsum ====================</p>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions
              of Lorem Ipsum.
            </p>
            <p className="mb-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
              in a piece of classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
              looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
              popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
              sit amet..", comes from a line in section 1.10.32.
            </p>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </Layout.Body>
          <Layout.Footer className="bg-gray-300">
            <div className="h-full border border-black border-solid">
              Footer
            </div>
          </Layout.Footer>
        </Layout>
      </div>
    </>
  );
};

/**
 * 레이아웃의 여백, 간격, min-max width는 잘못 할당되기 쉽기 때문에 css로 지정하도록 함
    - 반드시 같은 값으로 지정되어야 하는 속성 주의할것
 */
const meta: Meta<typeof SampleLayout> = {
  component: SampleLayout,
  argTypes: {
    sticky: {
      name: 'sticky',
      description: '스크롤시 header 고정 여부',
      defaultValue: false,
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SampleLayout>;

export const DefaultLayout: Story = {
  args: {
    sticky: false,
  },
};
