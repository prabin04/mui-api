import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "../Components/BlogsCard";

const Listed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=norway+electricity&apiKey=9932a81d52f24e0a941e532102c02251"
      )
      .then((response) => {
        const articles = response.data.articles
        setData(articles.slice(0,20));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }))
  return (
    <Container>
      <CustomBox>
    {data && data.map((item) => (
        <Box>
        <BlogsCard 
          key={item.id}
          data={item}
          />
        </Box>
    )
    )}
    </CustomBox>
    </Container>
  )
};

export default Listed;
