import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Card from '~/components/elements/Card';

export default component$(() => {
  return (
    <div class="justify-center">
      <header class="text-bold text-white justify-center text-center py-4">
        <h1 class="font-bold text-2xl sm:text-5xl">
          VRChat Things
        </h1>
        <br />
        <h1 class="font-bold text-2xl sm:text-3xl">
          Random VRChat related things
        </h1>
      </header>
      <section class="flex flex-col gap-3 mx-auto max-w-6xl px-6 items-center justify-center py-20" >
        <h1 class="font-bold text-5x1 sm:text-3xl text-white">
          Avatar stuff
        </h1>
        <div class="flex content-center justify-center gap-4 px-10 overflow-x-auto py-2 mx-auto">
          <Card name="Comms" link="/discord">
            <br />
            <span class="text-red-500 font-bold">
              CURRENTLY CLOSED
            </span>
            <br />
            <br />
            I will create you a custom avatar<br />
            The cost of this depends on the complexity of the avatar and the amount of customizations you want.
          </Card>
          <Card name="Quest Conversions" link="/discord">
            I will convert a pc only avatar to quest<br />
            This requires explicit permission from the original creator<br />
            Cost: $5-$10 per avi
          </Card>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'VRChat stuff',
  meta: [
    {
      name: 'description',
      content: 'VRChat things.',
    },
    {
      name: 'og:description',
      content: 'VRChat things.',
    },
    {
      name: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/86643576',
    },
  ],
};