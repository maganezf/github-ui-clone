import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ThemeName } from '../../styles/themes';

import { Container, GitHubLogo, SearchForm } from './styles';

interface IHeaderProps {
  themeName: ThemeName;
  setThemeName: (newThemeName: ThemeName) => void;
}

const Header: React.FC<IHeaderProps> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GitHubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Type a username or a repository link"
          value={search}
          onChange={event => setSearch(event.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
