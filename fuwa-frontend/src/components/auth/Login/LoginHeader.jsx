import { Typography } from "@mui/material";
//Typography is a component from material UI library which helps in styling fonts in your website by allowing you to add custom css or use component inbuilt attributes to style.

const LoginHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginHeader;
