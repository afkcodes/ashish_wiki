import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>
        <p class='text-xl text-white'>ashish.wiki</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ashish's personal space",
  meta: [
    {
      name: 'description',
      content: 'Ashish personal space/portfolio',
    },
  ],
};
