import React from "react";
import { Card, CardContent, Typography, Grid, Box, IconButton } from "@mui/material";
import { Phone, Star, LocationOn, Email } from "@mui/icons-material";
import Image from "next/image";

const LeadDetails: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={2}>Lead Details</Typography>
      <Grid container spacing={2}>
        {/* Lead Details Card */}
        <Grid item xs={12}>
          <Card sx={{ background: "#fad0ff", borderRadius: 2, padding: 2, border: "1px solid #000" }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1}>
                <Star sx={{ color: "black" }} />
                <Typography variant="h5" fontWeight="bold">Nilesh Patel</Typography>
              </Box>
              <Typography variant="subtitle1" color="textSecondary">Enroll</Typography>
              <Box display="flex" alignItems="center" gap={1} mt={1}>
                <Phone />
                <Typography>India2521160180</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Email />
                <Typography>nileshpatel2@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOn />
                <Typography>Nawada</Typography>
              </Box>
            </CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2} sx={{ background: "#e0aaff", borderTop: "1px solid #000" }}>
              <Typography variant="h6" color="primary">+12</Typography>
              <IconButton color="primary">
                <Phone />
              </IconButton>
              <Typography>Call</Typography>
            </Box>
          </Card>
        </Grid>

        {/* Details Table */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2, p: 2, border: "1px solid #000" }}>
            <Grid container>
              {[
                ["Lead Source:", "Webinar"],
                ["Lead Age", "35 Days"],
                ["Lead Owner", "Nilesh Patel"],
                ["Board", "CBSE"],
                ["Assigned", "Prashant Kumar"],
                ["Address", "Nawada"],
                ["Created by", "Mother"],
                ["Class", "6th"],
                ["Mother occupation", "Teacher"],
                ["Father Occupation", "Accountant"],
                ["Created on", "20-Jan-2025"],
                ["Modified on", "17-Jan-2025"],
                ["Alternative no", "India321620798"],
                ["Parents name", "Alexandra Atkins"],
                ["School name", "Delhi Public School R.K. Puram"],
                ["Interact with", "Mother"],
                ["City", "Mumbai"],
                ["State", "Maharashtra"],
                ["Percentage", "71%"],
                ["Tags", ""]
              ].map(([label, value], index) => (
                <React.Fragment key={index}>
                  <Grid item xs={6} sx={{ background: index % 2 === 0 ? "#d3d3f3" : "#ffffff", padding: 1, borderBottom: "1px solid #000" }}>
                    <Typography fontWeight="bold">{label}</Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ background: index % 2 === 0 ? "#d3d3f3" : "#ffffff", padding: 1, borderBottom: "1px solid #000" }}>
                    <Typography>{value}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeadDetails;