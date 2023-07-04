import { Slot, component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main class='bg-black_x-900 text-black_x-100 min-h-screen px-40 py-20 '>
        <Slot />
      </main>
    </>
  );
});
