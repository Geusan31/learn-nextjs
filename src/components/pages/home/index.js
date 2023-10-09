import { CardsCarousel } from '@/components/card'
import { Layout } from '@/components/layouts'
import HomeFeature from '@/feature/home/HomeFeature'
import { Container } from '@mantine/core'

export default function HomePage() {
  return (
    <Layout>
      <HomeFeature/>
      <Container pt={50}>
        <CardsCarousel/>
      </Container>
    </Layout>
  )
}
