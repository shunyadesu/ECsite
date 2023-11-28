import type { NextPage } from 'next'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

type IndexProps = {
  data: {
    message: string
  }
}

const Home: NextPage<IndexProps> = ({ data }) => {
  return (
    <>
      <Flex gap = '5' padding = '33%'>
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />



        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />


        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />

      </Flex>

    

    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('https://krt.azurewebsites.net/api/greeting')
  const data = await res.json()
  return {
    props: {
      data
    } 
  }
}

export default Home