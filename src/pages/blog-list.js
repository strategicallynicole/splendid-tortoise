import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "sections/Navigation-Dark"
import BlogList from "sections/Blog-list"
import Footer from "sections/Footer"

import { GlobalStyle } from "sections/app.style"
import theme from "theme/blog/themeStyles"

const BlogListPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BlogList />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default BlogListPage