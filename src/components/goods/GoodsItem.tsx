import { Flex, Image } from "@chakra-ui/react"

export const GoodItem = () => {
  return(
    <Flex gap={"4"}>
      <Image src="/test.jpg" alt="logo" width={100} height={100} />
      <Image src="/test.jpg" alt="logo" width={100} height={100} />
      <Image src="/test.jpg" alt="logo" width={100} height={100} />
      <Image src="/test.jpg" alt="logo" width={100} height={100} />
    </Flex>
  )
}