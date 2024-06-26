import {MetaFunction} from '@remix-run/node';
import {RouteHeader, TextParagraph} from '~/components';
import {texts} from '~/global';

export const meta: MetaFunction = () => {
  return [{title: 'About me'}];
};

export default function AboutPage() {
  const renderParagraphs = () => {
    return texts.about.map((paragraph, index) => <TextParagraph text={paragraph} key={index} />);
  };
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <RouteHeader title={'About me'} />
      <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="xl:col-span-3">{renderParagraphs()}</div>
      </div>
    </div>
  );
}
