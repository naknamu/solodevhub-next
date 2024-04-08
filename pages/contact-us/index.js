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
`;

const ContactUs = () => {
  return (
    <div className="container">
      <Metatag title={"Contact Us"} />
      <Wrapper>
        <h1>Contact Us</h1>
        <p>Name: Jodel Del Valle</p>
        <p>Email: jodeldelvalle@gmail.com</p>
        <p>Phone Number: +63 9773748593</p>
        <p>
          Location: Block 14, Lot 36 Covenant Village, Bagong Silangan, Quezon
          City, Philippines
        </p>
      </Wrapper>
    </div>
  );
};

export default ContactUs;
