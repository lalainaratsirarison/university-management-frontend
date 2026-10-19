import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { useDebounce, useLocalStorage, usePagination, usePermission } from "../index";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 300));
    expect(result.current).toBe("initial");
  });

  it("updates value after delay", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "initial" } }
    );

    rerender({ value: "updated" });
    expect(result.current).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("updated");
  });
});

describe("useLocalStorage", () => {
  it("returns initial value when localStorage is empty", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "default"));
    expect(result.current[0]).toBe("default");
  });

  it("sets and retrieves value", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "default"));

    act(() => {
      result.current[1]("new-value");
    });

    expect(result.current[0]).toBe("new-value");
    expect(localStorage.setItem).toHaveBeenCalledWith("test-key", '"new-value"');
  });
});

describe("usePagination", () => {
  it("provides pagination controls", () => {
    const { result } = renderHook(() => usePagination({ initialPage: 1, initialLimit: 20 }));

    expect(result.current.page).toBe(1);
    expect(result.current.limit).toBe(20);
  });

  it("increments page", () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.page).toBe(2);
  });

  it("decrements page but not below 1", () => {
    const { result } = renderHook(() => usePagination({ initialPage: 1 }));

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.page).toBe(1);
  });

  it("resets page", () => {
    const { result } = renderHook(() => usePagination({ initialPage: 5 }));

    act(() => {
      result.current.resetPage();
    });

    expect(result.current.page).toBe(1);
  });
});

describe("usePermission", () => {
  it("checks single permission", () => {
    const { result } = renderHook(() => usePermission(["read", "write"]));
    expect(result.current.hasPermission("read")).toBe(true);
    expect(result.current.hasPermission("delete")).toBe(false);
  });

  it("checks any permission", () => {
    const { result } = renderHook(() => usePermission(["read"]));
    expect(result.current.hasAnyPermission(["read", "write"])).toBe(true);
    expect(result.current.hasAnyPermission(["delete", "admin"])).toBe(false);
  });

  it("checks all permissions", () => {
    const { result } = renderHook(() => usePermission(["read", "write"]));
    expect(result.current.hasAllPermissions(["read"])).toBe(true);
    expect(result.current.hasAllPermissions(["read", "write"])).toBe(true);
    expect(result.current.hasAllPermissions(["read", "delete"])).toBe(false);
  });
});