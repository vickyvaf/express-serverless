import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get("/fibonacci", (req, res) => {
  const n = parseInt(req.query.n as string) || 1;
  console.time(`heavy-calculation ${n}`);
  const result = fibonacci(n);
  console.timeEnd(`heavy-calculation ${n}`);
  res.send(`Fibonacci(${n}) = ${result}`);
});

app.get("/", (req, res) => {
  console.log("req", req.query);
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
