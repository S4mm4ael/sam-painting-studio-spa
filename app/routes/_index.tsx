/* eslint-disable react/no-unescaped-entities */
import type {MetaFunction} from '@remix-run/node';
import photo from '../../public/my-photo.jpg';
import {InstagramIcon} from '~/components/icons';
import {RouteHeader, TextParagraph} from '~/components';

export const meta: MetaFunction = () => {
  return [
    {title: 'Sam painting studio'},
    {name: 'Painting service', content: 'Welcome to my studio page!'},
  ];
};

const texts = [
  `Please reach out with your goals, and I'll provide you with a personalized quote.
Pricing depends on miniature size and intricacy.`,
  ` I'll collaborate closely with you to deliver a tailor-made and distinctive painting
service. I have a genuine passion for both painting and gaming, ensuring your newly
painted miniatures exceed your expectations. Whether you have a clear vision or need
assistance, we'll embark on a creative journey to discover the perfect paint scheme.`,
  `  My services encompass painting full armies, warbands, entire board games, terrain, 3D
prints, assembly, and custom basing.`,
  ` I'll keep you informed with progress pictures at every stage to guarantee your complete
satisfaction.`,
];

const renderParagraps = () => {
  return texts.map((paragraph, index) => <TextParagraph text={paragraph} key={index} />);
};

export default function IndexPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <RouteHeader title={'Home'} />
      <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center">
          <img src={photo} alt="its me" className="h-48 w-48 rounded-full object-cover mt-6" />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Siamion Krapivin
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Hey! My name is Siamion and I am a miniature painter
          </p>
          <div className="flex space-x-5 pt-6">
            <a
              href="https://www.instagram.com/serious.painting.studio/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="xl:col-span-2">{renderParagraps()}</div>
      </div>
    </div>
  );
}
