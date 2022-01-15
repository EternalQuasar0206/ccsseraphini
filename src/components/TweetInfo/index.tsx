import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { TweetData } from 'types/Tweet';

interface TwitterInfoProps {
  tweet: TweetData;
  key?: string;
}

const TwitterInfo = ({ tweet }: TwitterInfoProps) => {
  return (
    <Link
      href={`https://twitter.com/${tweet.userInfo.username}/status/${tweet.id}`}
      target="blank"
      _hover={{ textDecoration: 'none' }}
      w="100%"
      display="flex"
      justifyContent="center"
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        borderBottomWidth={2}
        p={8}
        w={['100%', '100%', 700]}
        alignItems="flex-start"
      >
        <Image
          borderRadius="full"
          objectFit="cover"
          boxSize="50px"
          src={tweet.userInfo.profile_image_url}
          alt={tweet.userInfo.name}
          marginX={4}
        />
        <Box>
          <Link
            href={`https://twitter.com/${tweet.userInfo.username}`}
            target="blank"
            _focus={{ boxShadow: 'none' }}
          >
            <Flex flexDir={['column', 'row']}>
              <Text fontSize={14} fontWeight="bold">
                {tweet.userInfo.name}
              </Text>
              <Text
                fontSize={14}
                color="gray.500"
                fontWeight="light"
                ml={[0, 2]}
              >
                {`@${tweet.userInfo.username}`}
              </Text>
            </Flex>
          </Link>
          <Text mt={2}>{tweet.text}</Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default TwitterInfo;
