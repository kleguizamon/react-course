import React from "react";
import Title from "../Title";
import Text from "../Text";

const Blog = (props) => {
  const { title, content } = props;
  return (
    <section>
      <Title title={title} />
      <Text content={content} />
    </section>
  );
};

export default Blog;
