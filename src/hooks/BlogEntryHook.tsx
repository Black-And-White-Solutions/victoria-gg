import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import BlogEntry, {
  AuthorProps,
  BlogEntryProps,
} from '../components/BlogEntryComponents';
import listOfArticles from '../assets/JSONs/Blogs.json';

type BlogEntryParams = {
  blogId: string;
};

type BlogEntryHookProps = AuthorProps & BlogEntryProps & BlogEntryParams;

const BlogEntryHook: VoidFunctionComponent = () => {
  const { blogId }: BlogEntryParams = useParams();
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
    listOfArticles.forEach((item: BlogEntryHookProps) => {
      if (item.blogId === blogId) {
        const { blogId, ...rest } = item;
        setBlogProps({ ...rest });
      }
    });
  }, [blogId]);

  return (
    <BlogEntry
      author={blogProps.author}
      content={blogProps.content}
      title={blogProps.title}
    />
  );
};

export default BlogEntryHook;
