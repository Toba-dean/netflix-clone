import { useState } from 'react';

import { Header } from '../../components';
import * as ROUTES from "../../constants/routes";
import LOGO from "../../logo.svg";

const BrowseContainer = () => {

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
          </Header.Group>
        </Header.Frame>
      </Header>

    </>
  )
}

export default BrowseContainer
