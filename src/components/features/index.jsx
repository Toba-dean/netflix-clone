import { Container, Title, SubTitle } from './features.styles';

const Feature = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Feature

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  );
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return (
    <SubTitle {...restProps}>
      {children}
    </SubTitle>
  );
};


