import React from "react";
import { useQuery, gql } from "@apollo/client";
import { UnorderedList } from "../../styled";

const GetBlogPosts = gql`
  {
    blogs {
      id
      date
      title
    }
  }
`;

const BlogList: React.FC = () => {
  const { loading, error, data } = useQuery(GetBlogPosts);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: ${error.message}</p>;
  }

  return (
    <UnorderedList>
      {data.blogs.map(({ id, date, title }) => (
        <li key={id}>
          {title}
          <br />
          {id}
          <br />
          {date}
        </li>
      ))}
    </UnorderedList>
  );
};

export default BlogList;
