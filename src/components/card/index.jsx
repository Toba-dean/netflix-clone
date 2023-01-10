import { useContext, createContext, useState } from "react";

import {
  Container, Group, Title, SubTitle,
  Text, Entities, Meta, Image, Item
} from "./card.styles";


export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {

  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>
        {children}
      </Container>
    </FeatureContext>
  )
}

export default Card

Card.Group = function CardGroup({ children, ...restProps }) {
  return (
    <Group {...restProps}>
      {children}
    </Group>
  );
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  );
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return (
    <SubTitle {...restProps}>
      {children}
    </SubTitle>
  );
};

Card.Text = function CardText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  );
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return (
    <Entities {...restProps}>
      {children}
    </Entities>
  );
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return (
    <Meta {...restProps}>
      {children}
    </Meta>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return (
    <Image {...restProps} />
  );
};

Card.Item = function CardItem({ item, children, ...restProps }) {

  const { setShowFeature, setItemFeature, showFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(showFeature => !showFeature);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};