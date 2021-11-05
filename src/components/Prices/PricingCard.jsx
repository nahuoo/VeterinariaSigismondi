import {
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { Card, CardProps } from './Card'

export const PricingCard = (props) => {
  const { data, icon, button, ...rest } = props
  const { features, name } = data
  const accentColor = useColorModeValue('cyan.300', 'purple.200')

  return (
    <Card rounded={{ sm: 'xl' }} {...rest}>
      <VStack spacing={6}>
        <Icon aria-hidden as={icon} fontSize="4xl" color={accentColor} />
        <Heading size="md" fontWeight="extrabold">
          {name}
        </Heading>
      </VStack>
      <List p='10' spacing="4" mb="8" maxW="28ch" mx="auto">
        {features.map((feature, index) => (
          <ListItem fontWeight="medium" key={index}>
            <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={accentColor} />
            {feature}
          </ListItem>
        ))}
      </List>
      {button}
    </Card>
  )
}