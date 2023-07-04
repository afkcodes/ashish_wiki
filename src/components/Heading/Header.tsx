import { component$ } from '@builder.io/qwik';
import Button from '../Button/Button';
import Image from '../Image/Image';

const Header = component$(() => {
  return (
    <div class='flex justify-center items-center flex-col gap-4'>
      <Image />
      <div class='flex text-center flex-col gap-1'>
        <p class='text-3xl font-medium '>Ashish Kumar</p>
        <p class='text-xl font-medium'>JavaScript Enthusiast</p>
      </div>
      <Button text='Say Hello 👋' />
    </div>
  );
});

export default Header;
