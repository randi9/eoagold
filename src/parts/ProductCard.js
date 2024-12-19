import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import goldImage from "../assets/images/1gram.jpg";

export default function ProductCard() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto flex justify-center">
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          className="group rounded-2xl shadow-2xl border border-light-theme-purple"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={goldImage}
              alt="Product Image"
              className="rounded-t-2xl"
            />
            <CardContent className="bg-white p-6">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="text-theme-blue font-bold"
              >
                EOA GOLD Black Variant 1 Gram
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-700 font-light text-lg"
              >
                Rp. 1.575.500,00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
