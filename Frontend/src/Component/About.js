import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Grid, Tab } from "@mui/material";
import React from "react";
import Utsav from "../assets/avtar.jpeg";

const mystyle = {
  fontSize: "14px",
};
const About = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1", marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={3} sm={3} md={3}>
            <div className="row">
              <div style={{ marginLeft: "20px" }}>
                <img src={Utsav} alt="no" height="100px" width="100px" />
              </div>

              <div style={{ marginLeft: "20px" }}>
                <h2>Education</h2>
                <div style={mystyle}>
                  <p>MCA</p>
                  <p>BCA</p>
                  <p>12th</p>
                  <p>10th</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={8} sm={8} md={8}>
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <h4 style={{ fontSize: "16px" }}>Utsav Kachchhi</h4>
              <h6 style={{ fontSize: "12px" }}>React Intern</h6>
              <p style={{ fontSize: "12px" }}>
                Rankings: <span>10/10</span>
              </p>
            </div>
            <TabContext value={value}>
              {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="About" value="1" style={{ fontSize: "14px" }} />
                <Tab label="Timeline" value="2" style={{ fontSize: "14px" }} />
              </TabList>
              {/* </Box> */}
              <TabPanel value="1">
                <div style={{ textAlign: "left" }}>
                  <div>
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      Company :{" "}
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      DRC Systems India Pvt Ltd.
                    </p>
                    <br />
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      Name :{" "}
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      Utsav Kachchhi
                    </p>
                    <br />
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      Mobile No. :{" "}
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      98754 12548
                    </p>
                    <br />
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      Address :{" "}
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      Hipavadli
                    </p>
                    <br />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div style={{ textAlign: "left" }}>
                  <div>
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      MCA :{" "}
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      2022
                    </p>
                    <br />
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      BCA :
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      2020
                    </p>
                    <br />
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      12th :
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      2017
                    </p>
                    <br />
                    <label
                      style={{ display: "inline-block", fontSize: "14px" }}
                    >
                      10th :
                    </label>
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      2015
                    </p>
                    <br />
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
