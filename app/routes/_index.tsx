import type {MetaFunction} from "@remix-run/node";
import photo from "../../public/my-photo.jpg";

export const meta: MetaFunction = () => {
  return [
    {title: "Sam painting studio"},
    {name: "Painting service", content: "Welcome to my studio page!"},
  ];
};

export default function Index() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6 xl">
          Home
        </h1>
      </div>
      <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center">
          <img
            src={photo}
            alt="It's my photo!"
            className="h-48 w-48 rounded-full object-cover mt-6"
          />
        </div>
      </div>
    </div>
  );
}
