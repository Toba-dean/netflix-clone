import { useContext, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";

import { Header } from '../../components';
import * as ROUTES from "../../constants/routes";
import LOGO from "../../logo.svg";
import { FirebaseContext } from "../../context/firebaseContext";

const BrowseContainer = () => {

  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src={LOGO}
              alt="Netflix"
            />

            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>

            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <Header.Profile>
              <Header.Picture src={1} />

              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={1} />
                  <Header.TextLink>dean</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink
                    onClick={() => signOut(auth)}
                  >
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>

          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>

          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  )
}

export default BrowseContainer
