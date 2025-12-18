import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { canonicalUrl } from "../../utils/seo";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";
import { useQuery } from "@tanstack/react-query";
import { getBlogBySlug, getPublishedBlogs } from "../../api/blogsApi";
import { BlogItem } from "./Blogs";

const BlogDetails = () => {
  const { slug } = useParams();

  const {
    data: blogData,
    isLoading: isBlogLoading,
    isError: isBlogError,
  } = useQuery({
    queryKey: ["blogs", "slug", slug],
    queryFn: () => getBlogBySlug(slug),
    enabled: Boolean(slug),
  });

  const blog = blogData?.blog;

  const {
    data: publishedData,
    isLoading: isListLoading,
    isError: isListError,
  } = useQuery({
    queryKey: ["blogs", "published"],
    queryFn: getPublishedBlogs,
  });

  const allBlogs = publishedData?.blogs ?? [];
  const latestBlogs = blog
    ? allBlogs.filter((b) => b._id !== blog._id).slice(0, 3)
    : [];

  if (!slug) return <Navigate to="/blogs" />;
  if (!isBlogLoading && !isBlogError && !blog) return <Navigate to="/blogs" />;

  return (
    <>
      {blog && (
        <Helmet>
          <title>{blog.title} - Codelynes</title>
          {blog.metaDescription && (
            <meta name="description" content={blog.metaDescription} />
          )}
          {Array.isArray(blog.metaKeywords) && blog.metaKeywords.length > 0 && (
            <meta name="keywords" content={blog.metaKeywords.join(", ")} />
          )}
          <link rel="canonical" href={canonicalUrl(`/blogs/${blog.slug}`)} />
        </Helmet>
      )}
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
      <div className="bg-tertiary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          {isBlogLoading && (
            <div className="text-gray-700">Loading blog...</div>
          )}

          {isBlogError && (
            <div className="text-center max-w-xl mx-auto">
              <p className="text-secondary font-semibold">
                Couldn't load this blog right now.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Please go back and try again.
              </p>
            </div>
          )}

          {blog && (
            <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
              <img
                data-aos="fade-up"
                src={blog.imageUrl}
                alt={blog.imageAlt || blog.title}
                className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
              />
              <div className="flex flex-col gap-2">
                <div
                  data-aos="fade-up"
                  className="flex justify-between items-center font-light mt-[0.8rem]"
                >
                  <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                    By {blog.authorId?.name || blog.author?.name || "Admin"}
                  </div>
                  {blog.categoryId?.name && (
                    <div className="rounded-2xl bg-secondary/20 text-gray-900 font-medium px-3 py-1 text-sm w-fit">
                      {blog.categoryId.name}
                    </div>
                  )}
                </div>
                <h4 data-aos="fade-up" className="heading mt-[1rem] pb-[1.5rem]">
                  {blog.title}
                </h4>
                <div
                  
                  data-aos="fade-up"
                  className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
                >
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} className="reset-html"/>
                  
                </div>
              </div>
            </div>
          )}

          {!isListLoading && !isListError && latestBlogs.length > 0 && (
            <div className="pt-[3rem]">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary">Latest Blogs</h2>
              </div>
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {latestBlogs.map((item) => (
                  <BlogItem key={item._id} blog={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
