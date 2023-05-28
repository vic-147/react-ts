type Props = { image: string };
export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    <img
      width={320}
      height="auto"
      src={image}
      alt="image"
      className="rounded-lg"
    />
  );
};
