import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { HeightContainer } from '../Container';
import {
  AuthorContainer,
  Padding,
  Thumbnail,
  Title,
} from './BlogEntryComponents';
import listOfArticles from '../../assets/JSONs/Blogs.json';

type BlogEntryProps = {
  author: {
    details: string;
    name: string;
    thumbnail: string;
  };
  blogId: string;
  content: string;
  title: string;
};

const BlogEntry: VoidFunctionComponent = () => {
  const blogId = useParams();
  const [blogProps, setBlogProps] = useState({
    title: '',
    content: '',
    author: {
      details: '',
      name: '',
      thumbnail: '',
    },
  });

  console.log(blogProps);

  useEffect(() => {
    listOfArticles.forEach((item: BlogEntryProps) => {
      const { blogId, ...rest } = item;
      if (item.blogId === blogId) setBlogProps({ ...rest });
    });
  }, [blogId]);

  return (
    <HeightContainer display={'flex'}>
      <Padding>
        <Title>{blogProps.title}</Title>
        <Padding>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogProps.content}
          </ReactMarkdown>
        </Padding>
        <AuthorContainer>
          <Thumbnail src={blogProps.author.thumbnail} alt="Thumbnail" />
          <div>
            <h2>{blogProps.author.name}</h2>
            <p>{blogProps.author.details}</p>
          </div>
        </AuthorContainer>
      </Padding>
    </HeightContainer>
  );
};

export default BlogEntry;
