import React, { VoidFunctionComponent } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const JSON = {
  title: 'Genera tus propios ingresos en una forma innovadora',
  author: {
    name: 'Author Name',
    details: 'Author Details',
    thumbnail: 'https://i.imgur.com/5ecsIlls.jpg',
  },
  content: `
---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
`,
};

const Padding = styled.div`
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

const Container = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  margin: 1rem 0;
  gap: 1rem;
  grid-auto-flow: column;
`;

const BlogEntry: VoidFunctionComponent = () => {
  return (
    <Padding>
      <Title>{JSON.title}</Title>
      <Padding>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {JSON.content}
        </ReactMarkdown>
      </Padding>
      <Container>
        <Thumbnail src={JSON.author.thumbnail} alt="Thumbnail" />
        <div>
          <h2>{JSON.author.name}</h2>
          <p>{JSON.author.details}</p>
        </div>
      </Container>
    </Padding>
  );
};

export default BlogEntry;
