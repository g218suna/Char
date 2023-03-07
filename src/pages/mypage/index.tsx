import { Container, Heading } from '@chakra-ui/react'
import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'

export const Page = () => {
    return (
        <AuthGuard>
            <Container py={14}>
                <Heading>マイページ</Heading>
            </Container>
        </AuthGuard>
    )
}

export default Page