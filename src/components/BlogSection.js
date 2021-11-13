import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../Layout/Layout";
import MainTitle from "../utils/MainTitle";
import blogs from "../blogs";
const BlogSection = () => {
  return (
    <BlogSectionStyled>
      <SectionStyled>
        <div className="titleContainer">
          <MainTitle
            title={"Recents articles"}
            subtitle={"Blog"}
            paragraph={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, minima? Atque minima autem maxime dignissimos aperiam cum sed voluptatibus soluta rem odit! Culpa nostrum repellendus nam nemo illo tenetur! Consequatur!"
            }
          />
        </div>
        <div className="blogs">
          {blogs &&
            blogs.map((blog) => (
              <div className="blog" key={blog.id}>
                <div className="image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <h6>{blog.title}</h6>
                <div className="user">
                  <p>Author : </p>
                  <p>{blog.name} </p>
                </div>
              </div>
            ))}
        </div>
      </SectionStyled>
    </BlogSectionStyled>
  );
};

const BlogSectionStyled = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
    padding-top: 2rem;
    .blog {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      cursor: pointer;
      .user {
        padding: 1rem;
      }
      &:hover {
        transition: all 0.4s ease-in-out;
        background: linear-gradient(
          120deg,
          rgba(74, 91, 237, 1) 0%,
          rgba(143, 10, 133, 1) 27%,
          rgba(255, 0, 155, 1) 100%
        );
      }
      h6 {
        padding-left: 1rem;
        padding-top: 1rem;
      }
      .image {
        height: 300px;
        overflow: hidden;
        width: 100%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        transition: all 0.4s ease-in-out;
        img {
          height: 100%;
          width: 100%;
          transition: all 0.4s ease-in-out;
          object-fit: cover;
          border-top-right-radius: 20px;
          border-top-left-radius: 20px;
          filter: grayscale(50%);
          &:hover {
            transform: scale(1.2) rotate(10deg);
            filter: grayscale(0);
          }
        }
      }
      p {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.3);
        &:last-child {
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
`;

export default BlogSection;
