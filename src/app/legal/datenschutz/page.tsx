import Datenschutz from "@/components/pages/legal/datenschutz";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Datenschutzerklärung – TK Gerüste GmbH",
  description: "Datenschutzerklärung der TK Gerüste GmbH. Informationen zu Datenverarbeitung, Cookies, Webanalyse und Betroffenenrechten.",
  openGraph: {
    title: "Datenschutzerklärung – TK Gerüste GmbH",
    description: "Datenschutzerklärung der TK Gerüste GmbH. Informationen zu Datenverarbeitung, Cookies, Webanalyse und Betroffenenrechten.",
    url: "/legal/datenschutz"
  }
};

const DatenschutzPage = () => {
  return (
    <Wrapper>
      <Datenschutz />
    </Wrapper>
  )
}

export default DatenschutzPage