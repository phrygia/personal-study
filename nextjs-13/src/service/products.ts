import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  src: string;
};

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((item) => item.id === id);
}

// function main() {
//   const arr = Array(1).fill(Number.MAX_SAFE_INTEGER);
//   console.time("main start");

//   const result = arr.reduce((acc, num) => acc + num, 0);
//   console.log(result);

//   console.timeEnd("main finish");
// }

// function sum(numberArray) {
//   return new Promise((resolve) => {
//     resolve(numberArray.reduce((acc, num) => acc + num, 0));
//   });
// }

// async function asyncMain() {
//   const arr = Array(1).fill(Number.MAX_SAFE_INTEGER);

//   console.time("asyncMain start");

//   let mid = Math.ceil(arr.length / 2);
//   let firstHalf = arr.slice(0, mid);
//   let secondHalf = arr.slice(mid);

//   const [first, second] = await Promise.all([sum(firstHalf), sum(secondHalf)]);

//   console.log(first + second);

//   console.timeEnd("asyncMain finish");
// }

// main();
// asyncMain();
