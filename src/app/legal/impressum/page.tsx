import Impressum from "@/components/pages/legal/impressum";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Impressum – TK Gerüste GmbH",
  description: "Impressum der TK Gerüste GmbH. Kontaktdaten, Handelsregistereintrag und rechtliche Informationen.",
  openGraph: {
    title: "Impressum – TK Gerüste GmbH",
    description: "Impressum der TK Gerüste GmbH. Kontaktdaten, Handelsregistereintrag und rechtliche Informationen.",
    url: "/legal/impressum"
  }
};

const ImpressumPage = () => {
  return (
    <Wrapper>
      <Impressum />
    </Wrapper>
  )
}

export default ImpressumPage
