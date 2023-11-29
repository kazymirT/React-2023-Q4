import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    globals: true,
    coverage: {
      include: ["src/"],
      exclude: ["src/components/type/type.tsx"],
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
