import { component$ } from '@builder.io/qwik';

interface ButtonProps {
  text: string;
}
const Button = component$((props: ButtonProps) => {
  return (
    <button class='px-6 py-3 border border-black_x-600 rounded-xl font-medium active:scale-95 duration-300'>
      {props.text}
    </button>
  );
});

export default Button;
