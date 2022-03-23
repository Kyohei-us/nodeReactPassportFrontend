import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface GridItem {
  content: string;
  link: string;
}

export default function ResponsiveGrid(props: { contents: any[] }) {
  const contents = props.contents;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(contents).map((ele: GridItem, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <Item>
              <Link href={ele.link}>{ele.content}</Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
