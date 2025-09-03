import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "TK Gerüste GmbH - Sicherheit in jeder Höhe!",
};
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default page