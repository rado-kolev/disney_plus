import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne
            src='src/assets/images/cta-logo-one.svg'
            alt='upper logo'
          />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 26/04/24, the price of Disney+
            and The Disney Bundle will increase by £1.
          </Description>
          <CTALogoTwo
            src='src/assets/images/cta-logo-two.png'
            alt='lower logo'
          />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vw;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url('src/assets/images/login-background.jpg');
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 650px;
  min-height: 1px;
  width: 100%;
  display: block;
`;

const SignUp = styled.a`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;
  width: 100%;
  color: #f9f9f9;
  background-color: #0063e5;
  padding: 16px 0;
  margin-bottom: 12px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 650px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
