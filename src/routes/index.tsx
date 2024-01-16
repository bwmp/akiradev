import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/elements/Card";

export default component$(() => {
  return (
    <div>
      <header class="text-bold text-white text-center py-4">
        <h1 class="font-bold text-2xl sm:text-5xl">
          AkiraDev
        </h1>
        <br />
        <p class="flex gap-1.5 justify-center items-center">
          <img width="170" height="28" src="https://api.statusbadges.me/badge/status/798738506859282482?simple=true&style=for-the-badge" alt="status" />
          <img width="136" height="28" src="https://api.statusbadges.me/badge/playing/798738506859282482?style=for-the-badge" alt="playing" />
          <img width="183" height="28" src="https://api.statusbadges.me/badge/vscode/798738506859282482?style=for-the-badge" alt="vscode" />
          <a href="https://api.statusbadges.me/openspotify/798738506859282482" target="_blank" rel="noopener"><img width="301" height="28" src="https://api.statusbadges.me/badge/spotify/798738506859282482?style=for-the-badge" alt="spotify" /></a>
        </p>
      </header>
      <section class="flex flex-col gap-3 mx-auto max-w-6xl px-6 items-center justify-center py-20" >
        <h1 class="font-bold text-white text-xl sm:text-3xl mt-10">
          Main Projects
        </h1>
        <h1 class="text-white text-sm sm:text-xl pb-8">
          Here are some of the projects I work on
        </h1>
        <div class="flex w-full overflow-x-hidden" style={{
          '-webkit-mask-image': 'linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);',
        }}>
          <div class="flex content-center justify-center gap-4 px-10 overflow-x-auto py-2 mx-auto">
            <Card name="SimplyMC" icon="https://www.simplymc.art/icon-192x192.png" github="https://github.com/LuminescentDev/SimplyMC" link="https://simplymc.art">
              A Minecraft Multitool for server owners, developers, and players.
            </Card>
            <Card name="Lumin" icon="https://lumin.luminescent.dev/Lumin.png" github="https://github.com/bwmp/Lumin" link="https://lumin.luminescent.dev/">
              A silly little moon themed bot<br />
              Interactions, Utilities, Fun!
            </Card>
            <Card name="Bwmps Tools" icon="/images/IMG_7096.png" link="https://shop.akiradev.me/b/VCP7a">
              A multipurpose unity tool for vrchat avatar creation
            </Card>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-3 mx-auto max-w-6xl px-6 items-center justify-center py-20" >
        <h1 class="font-bold text-white text-xl sm:text-3xl mt-10">
          All Projects
        </h1>
        <h1 class="text-white text-sm sm:text-xl pb-8">
          ALL MY STUFF
        </h1>
        <div class="flex w-full overflow-x-hidden" style={{
          '-webkit-mask-image': 'linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);',
        }}>
          <div class="flex content-center justify-center gap-4 px-10 overflow-x-auto py-2 mx-auto">
            <Card name="DeezItems" icon="/images/DeezItems.jpg" github="https://github.com/LuminescentDev/DeezItems" link="https://www.spigotmc.org/resources/deezitems.103356/">
              Custom Item plugin that allows server owners to create custom items with special abilities
            </Card>
            <Card name="Player Perks" icon="/images/IMG_7096.png" github="https://github.com/LuminescentDev/PlayerPerks">
              Custom perk plugin i made for my friend's server
            </Card>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-3 mx-auto max-w-6xl px-6 items-center justify-center py-20" >
        <h1 class="font-bold text-white text-xl sm:text-3xl mt-10">
          Discontinued Projects
        </h1>
        <h1 class="text-white text-sm sm:text-xl pb-8">
          Random projects that i have stopped working on for one reason or another
        </h1>
        <div class="flex w-full overflow-x-hidden" style={{
          '-webkit-mask-image': 'linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);',
        }}>
          <div class="flex content-center justify-center gap-4 px-10 overflow-x-auto py-2 mx-auto">
            <Card name="Aether SMP" icon="/images/Aether.jpg" link="https://www.aethersmp.com/">
              My old minecraft server that died due to lack of funding.
            </Card>
            <Card name="Sabotage" icon="/images/Sabotage.png" github="https://github.com/LuminescentDev/Sabotage">
              Discontinued for the same reason as aether, old gamemode server that never got any traction. It still remains as an open source plugin for anyone to use.
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "AkiraDev",
  meta: [
    {
      name: "AkiraDev",
      content: "My Personal Website",
    },
  ],
};
