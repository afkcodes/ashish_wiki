import { component$ } from '@builder.io/qwik';

const Image = component$(() => {
  return (
    <img
      class='rounded-full'
      width='100'
      height='100'
      src='https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/304738330_8069429126462905_2726666756162217572_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=axbLmfbU9B4AX8hXclO&_nc_ht=scontent.fblr20-2.fna&oh=00_AfAMpwXMMmZ6zKDe8cnAIUjzDC9VRVUomqVGHavtJdKFQg&oe=64A93A3F'
      loading='lazy'
    />
  );
});

export default Image;
