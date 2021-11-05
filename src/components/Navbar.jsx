import {Link as RouterLink} from 'react-router-dom'
import {
  Box,
  Link,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box pos="fixed" boxShadow="base" w="100%" zIndex={2}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} ml={5} align={"center"} justify={{ base: 'center', md: 'start' }}>
          <Image
            boxSize="60px"
            objectFit="cover"
            width="128"
            //src="/React/miapp1/src/assets/img/logo.jpg"
            src="https://irp-cdn.multiscreensite.com/c3ff055a/MOBILE/jpg/2176441-logo-6512b.jpg"
            alt="logovete"
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Image
            href={'https://www.instagram.com/veterinariasigismondi/?hl=es'}
            src={
              'https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-logotipo-del-icono-de-facebook.png'
            }
          />
          <Image
            href={'https://www.instagram.com/veterinariasigismondi/?hl=es'}
            src={
              'https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png'
            }
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                <RouterLink to="/about">About</RouterLink>               
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = (NAV_ITEMS) => {
  return (
    <Link
      href={NAV_ITEMS.href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'verde' }}
            fontWeight={500}
          >
            {NAV_ITEMS.label}
          </Text>
          <Text fontSize={'sm'}>{NAV_ITEMS.subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'red.base'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = (NAV_ITEMS) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={NAV_ITEMS.children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={NAV_ITEMS.href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {NAV_ITEMS.label}
        </Text>
        {NAV_ITEMS.children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {NAV_ITEMS.children &&
            NAV_ITEMS.children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [

  {
    label: 'Nosotros',
    children: [
      {
        label: '¿Quienes Somos?',
        subLabel: 'pipiri papu',
        href: 'nosotros',
      },
      {
        label: 'Nuestros Servicios',
        subLabel: 'Los servicios que brindamos',
        href: 'index',
      },
    ],
  },
  {
    label: 'Ubicación',
    href: 'https://www.google.com.ar/maps/dir//Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires,+Argentina/@-37.982938,-57.5634771,16z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!2m2!1d-57.5590997!2d-37.9829465!3e2',
  },
  {
    label: 'Contacto',
    children: [
      {
        label: 'Teléfono',
        subLabel: 'Llamar a (0223)473-9018',
        href: 'tel:02234739018',
      },
      {
        label: 'Celular',
        subLabel: 'Llamar al (0223)156-800944',
        href: 'tel:5492236800944',
      },
      {
        label: 'WhatsApp',
        subLabel: 'Enviar mensaje al (0223)156-800944',
        href: 'https://api.whatsapp.com/send?phone=5492236800944',
      },
      {
        label: 'Email',
        subLabel: 'Escribinos a unoelectromedicina@gmail.com',
        href: 'mailto:unoelectromedicina@gmail.com',
      }
    ]
  },
  {
    label: 'Banco de Sangre',
    children: [
      {
        label: 'Donacion',
        subLabel: 'Ayudanos realizando donaciones de sangre',
        href: '#',
      },
      {
        label: 'Nuestros Donantes',
        subLabel: 'Mira mira una conexion a la base de datos',
        href: '#',
      }
    ],
  },
]