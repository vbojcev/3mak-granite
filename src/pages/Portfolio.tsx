import { Flex, Stack } from '@mantine/core';

const stack1 = [
  'kitchen1',
  'kitchen2',
  'kitchen3',
  'kitchen4',
  'kitchen5',
  'kitchen6',
];

const stack2 = [
  'waterfall3',
  'waterfall4',
  'waterfall5',
  'waterfall6',
  'waterfall7',
];

const Img = ({ name }: { name: string }) => {
  return (
    <div className="galleryImage">
      <a href={`/images/${name}.jpg`}>
        <img src={`/images/${name}.jpg`} alt={name} />
      </a>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <Flex
        gap="xs"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="nowrap"
        className="gallery"
      >
        <Stack gap="xs">
          {stack1.map((img) => (
            <Img name={img} key={img}></Img>
          ))}
        </Stack>
        <Stack gap="xs">
          {stack2.map((img) => (
            <Img name={img} key={img}></Img>
          ))}
        </Stack>
      </Flex>
    </>
  );
};

export default Portfolio;
