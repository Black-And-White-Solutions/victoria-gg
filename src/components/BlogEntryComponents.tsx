import React, { VoidFunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Container from './Container';

// Styled Components

export const MarkdownEngine = styled(ReactMarkdown)`
  h1,
  h2,
  p,
  i,
  a,
  .first-letter,
  a .authorName {
    color: rgba(0, 0, 0, 0.84);
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-bottom: 8px;
    color: #ff5cb9;
    font-family: 'Dancing Script', cursive;
    font-size: 48px;
    text-align: left;
  }

  h2 {
    padding: 0;
    margin: 56px 0 -13px -1.883px;
    font-family: 'Playfair Display', sans-serif;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.45px;
    line-height: 34.5px;
    text-align: left;
  }

  p,
  i,
  a {
    margin-top: 21px;
    margin-bottom: 8px;
    font-family: 'Lora', serif;
    font-size: 21px;
    letter-spacing: -0.03px;
    line-height: 1.58;
  }

  a {
    text-decoration: underline;
  }

  blockquote {
    padding: 0 0 0 50px;
    margin: 55px 0 33px 0;
    color: rgba(0, 0, 0, 0.68);
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-style: italic;
    letter-spacing: -0.36px;
    line-height: 44.4px;
    overflow-wrap: break-word;
  }

  ol,
  ul {
    padding-left: 18px;
  }

  code {
    padding: 3px 5px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    font-size: 18px;
  }

  mark,
  .highlighted {
    background: #7dffb3;
  }

  .first-letter {
    position: relative;
    display: block;
    margin: 0px 7px 0 -5px;
    float: left;
    font-family: 'Playfair Display', serif;
    font-size: 60px;
    line-height: 60px;
    overflow-wrap: break-word;
  }

  .subtitle {
    margin: 0 0 24px 0;
    color: rgba(0, 0, 0, 0.54);
    font-family: 'Lato', sans-serif;
  }

  ::selection {
    background-color: lavender;
  }
`;

export const Padding = styled.div`
  padding: 2rem;
`;

const Thumbnail = styled.img`
  width: 4rem;
  height: auto;
  border-radius: 50%;
`;

const Title = styled.h1`
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
`;

const AuthorContainer = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  margin: 1rem 0;
  gap: 1rem;
  grid-auto-flow: column;
`;

// Default Component

export type AuthorProps = {
  author: {
    details: string;
    name: string;
    thumbnail: string;
  };
};

export type BlogEntryProps = {
  content: string;
  title: string;
};

const BlogEntry: VoidFunctionComponent<Partial<AuthorProps> & BlogEntryProps> =
  ({ author, content, title }) => {
    return (
      <Container display={'flex'}>
        <Padding>
          <Title>{title}</Title>
          <Padding>
            <MarkdownEngine remarkPlugins={[remarkGfm]}>
              {content}
            </MarkdownEngine>
          </Padding>
          {author !== undefined ? (
            <AuthorContainer>
              <Thumbnail src={author?.thumbnail} alt="Thumbnail" />
              <div>
                <h2>{author?.name}</h2>
                <p>{author?.details}</p>
              </div>
            </AuthorContainer>
          ) : (
            <></>
          )}
        </Padding>
      </Container>
    );
  };

BlogEntry.propTypes = {
  author: PropTypes.shape({
    details: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }),
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogEntry;
