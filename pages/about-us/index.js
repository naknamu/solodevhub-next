import Metatag from "@/components/Metatag";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block: 2rem;
`;

const Link = styled.a`
    color: var(--accent);
    :hover {
        text-decoration: underline;
    }
`

const AboutUs = () => {
    return (
      <div className="container">
        <Metatag
          title={"About Us"}
        />
        <Wrapper>
            <h1>About Us</h1>
            <p>Hello! I'm Jodel, the solo developer of this website.</p>
            <p>I am a software developer based from the Philippines.</p>
            <p>In 2019, I left the corporate world to pursue freelancing.</p>
            <p>This is one of my projects that I have developed to help other solo developers
                learn how create amazing software applications, be it games or websites.
            </p>
            <p>I hope you learned something by visiting Solo Dev Hub. Cheers!</p>

            <p>P.S.</p>
            <p>If you want to know me more, you can visit my personal portfolio @
                <Link href="https://naknamu.github.io/">naknamu.github.io</Link>
            </p>
        </Wrapper>
      </div>
    );
  };
  
export default AboutUs;