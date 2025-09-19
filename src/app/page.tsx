"use client";
import { Search } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      {/* welcome message */}
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4">This is the main landing page of the application.</p>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<Search />}
        sx={{
          textTransform: "none",
          mt: 2,
          "&:hover": { backgroundColor: "primary.main" },
        }}
        className="w-full max-w-[200px]"
      >
        Click Me
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          className="mt-4 p-4 shadow-register"
          sx={{ borderRadius: "12px" }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            reprehenderit hic quae iusto, quibusdam quis impedit excepturi,
            labore magnam nesciunt porro dicta rerum fugiat est inventore illum
            voluptatem doloremque officia.
          </p>
        </Card>
        <Card
          className="mt-4 p-4 shadow-register"
          sx={{ borderRadius: "12px" }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            reprehenderit hic quae iusto, quibusdam quis impedit excepturi,
            labore magnam nesciunt porro dicta rerum fugiat est inventore illum
            voluptatem doloremque officia.
          </p>
        </Card>
        <Card
          className="mt-4 p-4 shadow-register"
          sx={{ borderRadius: "12px" }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            reprehenderit hic quae iusto, quibusdam quis impedit excepturi,
            labore magnam nesciunt porro dicta rerum fugiat est inventore illum
            voluptatem doloremque officia.
          </p>
        </Card>
      </div>
    </div>
  );
}
