import { Header } from "../../components";
import * as ROUTES from "../../constants/routes";
import LOGO from "../../logo.svg";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={LOGO} alt="Netflix" />

        <Header.ButtonLink to={ROUTES.SIGN_IN}>
          Sign In
        </Header.ButtonLink>
      </Header.Frame>

      {children}
    </Header>
  )
}

export default HeaderContainer