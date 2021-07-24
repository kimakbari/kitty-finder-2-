import { Flex, Text, Button , Image} from "@chakra-ui/react";

function Head({onClick}) {
  return (
    <Flex
      bgColor="#816AFE"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Text
        color="#fff"
        fontSize="40px"
        fontWeight="700"
        // fontFamily="Noto Sans"
        margin="30px"
      >
        KITTY FINDER
      </Text>
      <Flex width="100%" justifyContent="space-between" padding="60px">
        <Flex flexDirection="column">
          <Text color="#fff" fontSize="40px" fontWeight="700">
            SEARCH AND FIND
          </Text>
          <Text
            color="#F8D76C"
            fontSize="40px"
            fontWeight="700"
            fontFamily="Noto sans"
          >
            YOUR KITTY{" "}
          </Text>
          <Button onClick={onClick} color="#816AFE" width="250px" borderRadius="30px">
            start searching
          </Button>
        </Flex>
        <Flex>
            <Image alt="cat1" src="/assets/Cat1.png"/>
            <Image alt="cat2" src="/assets/Cat2.png"/>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Head;
