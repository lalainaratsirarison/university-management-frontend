import { describe, it, expect } from "vitest";
import { cn, formatDate, formatCurrency, truncate, slugify } from "../index";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("base", "extra")).toBe("base extra");
  });

  it("handles conditional classes", () => {
    expect(cn("base", true && "conditional")).toBe("base conditional");
    expect(cn("base", false && "conditional")).toBe("base");
  });

  it("handles tailwind merge", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });
});

describe("formatDate", () => {
  it("formats date string", () => {
    expect(formatDate("2026-01-15")).toBe("15/01/2026");
  });

  it("formats Date object", () => {
    expect(formatDate(new Date("2026-01-15"))).toBe("15/01/2026");
  });
});

describe("formatCurrency", () => {
  it("formats number as MGA currency", () => {
    expect(formatCurrency(1500000)).toContain("1 500 000");
    expect(formatCurrency(1500000)).toContain("MGA");
  });
});

describe("truncate", () => {
  it("truncates long strings", () => {
    expect(truncate("Hello World", 8)).toBe("Hello...");
  });

  it("returns original if shorter", () => {
    expect(truncate("Hi", 10)).toBe("Hi");
  });
});

describe("slugify", () => {
  it("converts to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("École Supérieure")).toBe("ecole-superieure");
    expect(slugify("  Test  ")).toBe("test");
  });
});