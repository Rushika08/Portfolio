import { useEffect, useRef } from 'react';

const posts = [
  {
    title: 'Star and Snowflake models used in Online Analytical Processing',
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Sopa184n3_A1AmBfap5lOg.png",
    url: 'https://medium.com/@rushikajayasinghe/star-and-snowflake-models-used-in-online-analytical-processing-cc069ceba603',
  },
  {
    title: 'What is Stereo Vision?',
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vaDM2eyxNQiDW98hg7XZpg.jpeg",
    url: 'https://medium.com/@rushikajayasinghe/what-is-stereo-vision-1b0d2206ee18',
  },
  {
    title: 'What is AEAD (Authenticated Encryption with Associated Data)?',
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CCLdddBQc4Xet5qjdtbxjQ.png",
    url: 'https://medium.com/@rushikajayasinghe/what-is-aead-authenticated-encryption-with-associated-data-17a5b2f42404',
  },
];

const MediumPosts = () => {
  return (
    <section className="p-6 bg-slate-900 text-white w-[70%] mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Medium Posts</h2>

      {/* Container for the grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col bg-slate-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <p className="text-sm text-cyan-300 font-medium">{post.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MediumPosts;
