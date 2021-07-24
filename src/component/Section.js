
import Search from "./Search";
import { Flex } from "@chakra-ui/react";
import InfoList from "./catsInfo/InfoList";

function Section({data , searchRef, onChange}) {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop="30px">
      <Search searchRef={searchRef} onChange={onChange} />
      <InfoList data={data}/>
    </Flex>
  );
}

export default Section;
