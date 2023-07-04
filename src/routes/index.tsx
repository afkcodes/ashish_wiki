import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Header from '~/components/Heading/Header';

export default component$(() => {
  return (
    <>
      <Header />
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
