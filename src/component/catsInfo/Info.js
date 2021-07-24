import { Flex, Image, Text } from "@chakra-ui/react";
function Info({ id, name, username, email }) {
  return (
    <Flex
      borderRadius="1rem"
      flexDir="column"
      m="1rem"
      boxShadow="md"
      h="300px"
      w="240px"
      cursor="pointer"
      transition="all 300ms ease"
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <Image src={`https://robohash.org/${id}?set=set4`} alt={name} height="60%" width="100%"/>
      <Flex marginTop="20px" flexDirection="column">
        <Text textAlign="center">{`Owner : ${name}`}</Text>
        <Text textAlign="center"> {`Username: ${username}`}</Text>
        <Text textAlign="center">{`email : ${email}`}</Text>
      </Flex>
    </Flex>
  );
}

export default Info;
