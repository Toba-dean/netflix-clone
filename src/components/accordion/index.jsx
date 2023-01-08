import { createContext, useState, useContext } from "react";

import { Container, Inner, Frame, Title, Item, Header, Body } from "./accordion.styles";

// Using context to handle state
const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

export default Accordion

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return (
    <Frame {...restProps}>
      {children}
    </Frame>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

// i am using the context here because the state change only affects the accordion not the entire app.
Accordion.Item = function AccordionItem({ children, ...restProps }) {

  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>
        {children}
      </Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {

  // getting the state from the context.
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      {...restProps}
      onClick={() => setToggleShow(toggleShow => !toggleShow)}
    >
      {children}

      {/* This shows the state */}
      {/* <pre>
        {JSON.stringify(toggleShow, null, 2)}
      </pre> */}

      {
        toggleShow ? (
          <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )
      }
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {

  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && (
    <Body
      {...restProps}
      className={toggleShow ? 'open' : 'closed'}
    >
      {children}
    </Body>
  )
}