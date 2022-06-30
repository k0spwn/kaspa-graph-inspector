import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ overflow: "auto" }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AnimTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: 0,
        marginBottom: 0.5,
        marginLeft: 0,
        marginRight: 0.5,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            minWidth: "91px",
          }}
        >
          <Tab label="One" {...a11yProps(0)} />
          <Tab label="Two" {...a11yProps(1)} />
          <Tab label="Three" {...a11yProps(2)} />
          <Tab label="Four" {...a11yProps(3)} />
          <Tab label="Five" {...a11yProps(4)} />
          <Tab label="Six" {...a11yProps(5)} />
          <Tab label="Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box sx={{ paddingRight: 5 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              nisi odio. Etiam et laoreet eros. Vestibulum et fringilla tellus.
              Aliquam ullamcorper orci nunc, vitae convallis diam efficitur sit
              amet. In condimentum gravida ante, id laoreet ex mattis in. Nullam
              iaculis sit amet odio nec lacinia. Nullam laoreet aliquam metus,
              sit amet lobortis ligula tincidunt a. In maximus augue lorem.
              Fusce vitae malesuada ex. Pellentesque faucibus sollicitudin
              dignissim. Aliquam at laoreet diam. Pellentesque mollis leo a dui
              posuere, in lacinia nisl eleifend.
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>2</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>3</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>4</Item>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nisi
          odio. Etiam et laoreet eros. Vestibulum et fringilla tellus. Aliquam
          ullamcorper orci nunc, vitae convallis diam efficitur sit amet. In
          condimentum gravida ante, id laoreet ex mattis in. Nullam iaculis sit
          amet odio nec lacinia. Nullam laoreet aliquam metus, sit amet lobortis
          ligula tincidunt a. In maximus augue lorem. Fusce vitae malesuada ex.
          Pellentesque faucibus sollicitudin dignissim. Aliquam at laoreet diam.
          Pellentesque mollis leo a dui posuere, in lacinia nisl eleifend.
        </TabPanel>
      </Box>
    </Box>
  );
}
