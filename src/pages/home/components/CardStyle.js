import React, { useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import { colors } from "@mui/material";
import { generateRandomColors } from "../../../lib/functions/generateColor";

const CardStyle = ({ data, onClick }) => {
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.innerHTML = data.body.slice(0, 400) + "...";
  }, []);

  return (
    <Card sx={{ mt: 5, mb: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: generateRandomColors(data.author[0].toUpperCase()) }}
            aria-label="avatar"
          >
            {data.author[0].toUpperCase()}
          </Avatar>
        }
        title={data.author}
        subheader={data.createdAt}
      />
      {data.thumbnail !== "" && (
        <CardMedia
          onClick={onClick}
          sx={{ cursor: "pointer" }}
          component="img"
          height="194"
          image={data.thumbnail}
          alt="thumbnail"
        />
      )}
      <CardContent onClick={onClick} sx={{ cursor: "pointer" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {data.title}
        </Typography>
        <p ref={textRef}></p>
      </CardContent>
      <CardActions>
        <IconButton aria-label="likes">
          <FavoriteIcon sx={{ color: colors.red[500] }} />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {data.likes.length}
        </Typography>

        <IconButton aria-label="views">
          <VisibilityIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {data.views}
        </Typography>

        <IconButton aria-label="comments">
          <CommentIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {data?.comments ? data?.comments.length : "0"}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardStyle;
