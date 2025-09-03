import Wrapper from '@/layouts/Wrapper'
import ServiceDetails from '@/components/services/service-details'
import ServiceDetailsArea from '@/components/services/service-details/ServiceDetailsArea'
import servicesDetailMap from '@/data/ServiceDetailsMap'

interface Props { params: any }

export function generateMetadata({ params }: Props) {
  const { slug } = params as Props['params'];
  const data = slug && servicesDetailMap[slug] ? servicesDetailMap[slug] : undefined;
  const imageMap: Record<string, string> = {
    'arbeits-schutzgerueste': '/assets/imgs/service/service-details-1.jpg',
    'fassadengerueste': '/assets/imgs/service/service-details-2.jpg',
    'dachfanggerueste': '/assets/imgs/service/service-details-3.jpg',
    'raumgerueste': '/assets/imgs/service/service-details-4.jpg',
  }
  const image = slug && imageMap[slug] ? imageMap[slug] : '/assets/imgs/service/service-details-1.jpg'

  return {
    title: data ? `${data.title_1} | TK Gerüste GmbH` : 'Service — TK Gerüste GmbH',
    description: data ? `${data.desc_1.slice(0, 150).replace(/\n/g, ' ')}` : 'TK Gerüste GmbH — professionelle Gerüstbauleistungen in Duisburg und NRW.',
    openGraph: {
      title: data ? `${data.title_1} | TK Gerüste GmbH` : 'TK Gerüste GmbH',
      description: data ? `${data.desc_1.slice(0, 160).replace(/\n/g, ' ')}` : undefined,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: data ? data.title_1 : 'TK Gerüste'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: data ? `${data.title_1} | TK Gerüste GmbH` : 'TK Gerüste GmbH',
      description: data ? `${data.desc_1.slice(0, 160).replace(/\n/g, ' ')}` : undefined,
      images: [image]
    }
  }
}

const Page = ({ params }: Props) => {
  const { slug } = params as Props['params']
  return (
    <Wrapper>
      {/* pass slug into ServiceDetails so it forwards to the area component */}
      <ServiceDetails initialSlug={slug} />
    </Wrapper>
  )
}

export default Page


