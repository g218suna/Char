import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Container,
    Flex,
    Heading,
    Spacer,
    Stack,
    StackDivider,
    Text
} from '@chakra-ui/react'
import { EmailIcon, EditIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faUser,
    faLock,
    faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'
import { getAuth, updateProfile } from '@firebase/auth'

export const Page = () => {
    const auth = getAuth()
    const userProfile = auth.currentUser

    return (
        <AuthGuard>
            <Container py={14} display={'flex'} flexDirection={'column'} gap={4}>
                <Flex flexDirection={'row'} gap={4}>
                    <Avatar flexShrink={0} width={12} height={12} />
                    <Heading>My Page</Heading>
                </Flex>

                <Card>
                    <CardHeader>
                        <Heading size={'lg'}>Your Profile</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing={4}>
                            <Box>
                                <Flex flexDirection={'row'} gap={2}>
                                    <FontAwesomeIcon icon={faUser} size={'xl'} />
                                    <Heading size={'md'}>User Name</Heading>
                                </Flex>
                                <Text pt={2} fontSize={'md'}>
                                    {userProfile?.displayName}
                                </Text>
                            </Box>
                            <Box>
                                <Flex flexDirection={'row'} gap={2}>
                                    <FontAwesomeIcon icon={faEnvelope} size={'xl'} />
                                    <Heading size={'md'}>Email Address</Heading>
                                </Flex>
                                <Text pt={2} fontSize={'md'}>
                                    {userProfile?.email}
                                </Text>
                            </Box>
                            <Box>
                                <Flex flexDirection={'row'} gap={2}>
                                    <FontAwesomeIcon icon={faLock} size={'xl'} />
                                    <Heading size={'md'}>Change Password</Heading>
                                </Flex>
                                <Text pt={2} fontSize={'md'}>
                                    Password
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>

                    <CardFooter>
                        <Button>
                            <Flex flexDirection={'row'} gap={2}>
                                <FontAwesomeIcon icon={faTrashCan} size={'lg'} />
                                <Text fontSize={'sm'}>
                                    Delete Account
                                </Text>
                            </Flex>
                        </Button>
                    </CardFooter>
                </Card>
                <Spacer height={8} aria-hidden />
            </Container>
        </AuthGuard>
    )
}

export default Page