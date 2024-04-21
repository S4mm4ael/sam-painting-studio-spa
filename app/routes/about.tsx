import type {MetaFunction} from "@remix-run/node";
import photo from "../../public/my-photo.jpg";
import {InstagramIcon} from "~/components/icons";

export default function AboutPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6 xl">
          About me
        </h1>
      </div>
      <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2">
          <p>
            Integer euismod ante in lacus sollicitudin condimentum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Ut ullamcorper ante at
            est dictum aliquam. Proin placerat tellus non est imperdiet, et varius diam posuere.
            Pellentesque efficitur, lorem vitae finibus imperdiet, lacus tellus ultricies turpis,
            finibus feugiat sapien nisl in velit. Curabitur pretium elit non nulla malesuada
            laoreet. Aliquam eget efficitur purus, in vulputate tellus.
          </p>
          <p>
            Vestibulum rutrum egestas tortor eu iaculis. Vivamus eget lacus id enim gravida maximus
            ac et erat. Praesent gravida cursus sapien, et facilisis sem tristique tincidunt. Cras
            nec pulvinar lacus. Vestibulum convallis venenatis augue vitae venenatis. Ut vestibulum
            arcu quis blandit consectetur. In luctus justo quis pulvinar feugiat. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p>
            Praesent scelerisque rutrum magna non laoreet. Phasellus imperdiet accumsan nulla a
            viverra. Praesent sit amet aliquet metus. Ut feugiat gravida urna, ut posuere purus
            commodo in. Donec lacinia nulla urna, in fermentum justo scelerisque sed. Vivamus
            vestibulum sem ut sapien pellentesque, ac sodales eros vulputate. Morbi neque arcu,
            eleifend nec diam id, mattis ornare eros.
          </p>
        </div>
      </div>
    </div>
  );
}
