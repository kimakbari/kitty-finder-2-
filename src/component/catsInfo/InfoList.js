import { Flex } from "@chakra-ui/react";
import Info from "./Info";

function InfoList({data}){
    return(
        <Flex justifyContent="center" flexWrap="wrap" margin="30px">
            {data.map(({id,name,username,email},key)=>(
                <Info 
                id={id}
                name={name}
                username={username}
                email={email}
                key={key}/>
            ))}
        </Flex>
    )
}

export default InfoList;