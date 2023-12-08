import React from 'react';

const BlogImage = ({ src,  text  }) => {
  return (
    <div class="relative w-full p-5">
    <img src={src}  />
    <div class="absolute bottom-0 px-3 py-7 bg-black/70 w-full">
      <p class="text-white font-semibold text-xl "> {text} </p>
    </div>
</div>
  );
};

export default BlogImage;