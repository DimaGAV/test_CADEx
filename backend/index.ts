import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req: Request, res: Response) => {
  const { name } = req.body.formData;
  console.log("Received data:", req.body);
  res.send(`Thank you for your interest, ${name}.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
