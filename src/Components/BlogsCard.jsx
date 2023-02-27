import { Box, styled, Typography } from "@mui/material";
import moment from "moment/moment";
import React from "react";

const BlogsCard = ({ data }) => {
  const CustomBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: "250px",
    gap: 5,
    backgroundColor: "lightgray",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));
  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));
  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));
  let date = moment(data.publishedAt).utc().format("DD-MM-YYYY");
  return (
    <CustomBox>
      <ImgContainer>
        <img src={data.urlToImage} alt="heroImg" style={{ maxWidth: "100%" }} />
      </ImgContainer>
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          {data.title}
        </Typography>
        <Typography variant="body2" sx={{ my: 1 }}>
          {date}
        </Typography>
      </Box>
    </CustomBox>
  );
};

export default BlogsCard;
