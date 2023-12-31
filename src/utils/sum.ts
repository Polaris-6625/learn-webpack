function sum(a: number, b: number): number;
function sum(a: string, b: string): string;

function sum(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // 处理数字
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b; // 处理字符串
  } else {
    throw new Error(
      "Invalid arguments. Arguments must be both numbers or both strings."
    );
  }
}
export {sum};