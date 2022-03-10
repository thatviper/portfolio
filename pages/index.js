import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Stack dir="row" spacing={"50px"} minH="80vh">
        <Box h="48vh">
          <Center>
            <Image
              mt="20px"
              borderRadius="full"
              boxSize="400px"
              src={"/hero_img_bw.jpg"}
              alt="Naga Narasimha"
              loading="lazy"
              shadow={"xl"}
            />
          </Center>
        </Box>
        <Center>
          <Text fontSize={["25px", "30px", "50px", "70px"]} fontWeight="bold">
            Hi! I'm{" "}
            <Text as="kbd">
              {"<"}Naga Narasimha{"/>"}
            </Text>
          </Text>
        </Center>
        <Center>
          <Text
            fontSize={["25px", "23px", "30px", "33px"]}
            as="i"
            mb={["0px", "0px", "20px"]}
          >
            Glad to meet you Mister/ Miss, You can know more about me here!
          </Text>
        </Center>
      </Stack>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {},
  };
};
