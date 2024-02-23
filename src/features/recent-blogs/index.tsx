import BlogCard from "@/components/main/blog-card/BlogCard";

const RecentBlogs = () => {
  return (
    <section className="py-10 container">
      <h1 className="text-2xl font-semibold">Recent blog posts</h1>

      <BlogCard
        author="Carl Sagan"
        date={new Date("01-01-1997")}
        title="Building your API Stack"
        size="sm"
      />
    </section>
  );
};

export default RecentBlogs;
