import { component$, Slot } from '@builder.io/qwik';
import { LogoGithub, GlobeOutline } from 'qwik-ionicons';

export default component$(({ link, name, icon, github }: any) => {
  return (
    <div class="flex-1 relative bg-gray-800 rounded-xl group transition-all shadow-lg backdrop-blur-lg bg-luminescent-900/60 hover:bg-luminescent-900/80 border border-luminescent-900">
      <div class="grid rounded-xl absolute w-full h-full bg-gray-900/50 transition opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm">
        {link && (
          <a href={link} class="flex flex-col justify-center transition hover:bg-luminescent-500/20 text-white rounded-xl font-bold items-center gap-4">
            <GlobeOutline width="24" class="fill-current" />
            Visit page
          </a>
        )}
        {github && (
          <a href={github} class="flex flex-col justify-center transition hover:bg-luminescent-500/20 text-white rounded-xl font-bold items-center gap-4">
            <LogoGithub width="24" class="fill-current" />
            Github
          </a>
        )}
      </div>
      <div class="p-8 w-64">
        {icon && (
        <img src={icon} alt={name} class="mb-10 rounded-lg" draggable={false} width={192} height={192} />
        )}
        <h2 class="text-white text-xl font-bold">{name}</h2>
        <p class="text-gray-400 mb-2">
          <Slot />
        </p>
      </div>
    </div>
  );
});