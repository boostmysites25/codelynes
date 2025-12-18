import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";
import { useQuery } from "@tanstack/react-query";
import { getPublishedBlogs } from "../../api/blogsApi";
import { Helmet } from "react-helmet";
import { canonicalUrl } from "../../utils/seo";

const Blogs = () => {
  const {
    data: publishedData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["blogs", "published"],
    queryFn: getPublishedBlogs,
  });

  const blogs = publishedData?.blogs ?? [];

  return (
    <>
      <Helmet>
        <title>Blogs - Codelynes</title>
        <meta
          name="description"
          content="Explore insights from Codelynes on software development, digital transformation, cloud computing, AI/ML, and modern product engineering."
        />
        <link rel="canonical" href={canonicalUrl("/blogs")} />
      </Helmet>
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={bannerImg}
          width="800"
          height="600"
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <LazyLoadImage
              src={line}
              alt="Decorative line"
              className="w-[3rem]"
            />
            <h2 className="font-medium text-secondary">Blogs</h2>
          </div>
          <h4
            data-aos="fade-up"
            className="heading-2 mx-auto font-semibold leading-tight text-primary text-center"
          >
            Insights and Innovations: Your Gateway to IT Excellence
          </h4>
          {isLoading && (
            <div className="mt-[2rem] text-gray-700">Loading blogs...</div>
          )}

          {isError && (
            <div className="mt-[2rem] text-center max-w-xl">
              <p className="text-secondary font-semibold">
                Couldn't load blogs right now.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                {(error && error.message) || "Please try again."}
              </p>
              <button
                type="button"
                onClick={() => refetch()}
                className="primary-btn mt-4"
              >
                Retry
              </button>
            </div>
          )}

          {!isLoading && !isError && blogs.length === 0 && (
            <div className="mt-[2rem] text-gray-700">
              No published blogs yet.
            </div>
          )}

          {!isLoading && !isError && blogs.length > 0 && (
            <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
              {blogs.map((blog) => (
                <BlogItem key={blog._id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-secondary/10 rounded-xl p-5 text-primary_text relative z-10 group"
    >
      <Link to={`/blogs/${blog.slug}`}>
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex justify-start font-light mt-[0.8rem]"></div>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-tertiary transition-all duration-200"
        >
          {blog.title}
        </Link>
        <p className="text-[.9rem] leading-tight text-gray-700 line-clamp-4 text-ellipsis hyphen-auto">
          {blog.excerpt}
        </p>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Link to={`/blogs/${blog.slug}`} className="primary-btn w-full">
          Read More
        </Link>
      </div>
    </div>
  );
};
