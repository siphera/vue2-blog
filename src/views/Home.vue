<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cads">
          <BlogCards :post="post" v-for="(post, index) in sampleCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCard";
export default {
  name: "Home",
  components: { BlogPost, BlogCards },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a filler title",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
        {
          title: "This is a filler title2",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "May 1, 2021",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    padding: 20px;
  }
}
</style>