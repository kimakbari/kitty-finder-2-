import {Flex,Input,InputGroup,InputLeftElement,Image} from '@chakra-ui/react'

function Search({searchRef,onChange}){
    return(
        <Flex >
            <InputGroup>
                <InputLeftElement>
                    <Image src="/assets/search.png"/>
                </InputLeftElement>
                <Input  ref={searchRef} onChange={onChange} placeholder="start searching" width="400px" borderRadius="30px" />
            </InputGroup>
            
        </Flex>
    )

}

export default Search;
