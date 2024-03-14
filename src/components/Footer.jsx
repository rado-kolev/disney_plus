import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; 2024 Disney+ Clone. All rights reserved.</p>
        <p>Created by Rado Kolev</p>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #090b13;
  color: #fff;
  padding: 20px;
`;

const FooterContent = styled.div`
  // max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export default Footer;
