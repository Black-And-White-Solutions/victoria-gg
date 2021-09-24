import React, { VoidFunctionComponent } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  AuthorContainer,
  Padding,
  Thumbnail,
  Title,
} from './BlogEntryComponents';

type BlogEntryProps = {
  title: string;
  content: string;
  author: {
    details: string;
    name: string;
    thumbnail: string;
  };
};

const BlogEntry: VoidFunctionComponent<BlogEntryProps> = ({
  title,
  content,
  author,
}) => {
  return (
    <Padding>
      <Title>{title}</Title>
      <Padding>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </Padding>
      <AuthorContainer>
        <Thumbnail src={author.thumbnail} alt="Thumbnail" />
        <div>
          <h2>{author.name}</h2>
          <p>{author.details}</p>
        </div>
      </AuthorContainer>
    </Padding>
  );
};

BlogEntry.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.shape({
    details: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogEntry;
