// vitest.config.ts
import react from "file:///Users/philippelattention/Code/epic-stack-monorepo/node_modules/.pnpm/@vitejs+plugin-react@4.0.4_vite@4.4.9/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/philippelattention/Code/epic-stack-monorepo/node_modules/.pnpm/vite@4.4.9_@types+node@20.6.2/node_modules/vite/dist/node/index.js";
var vitest_config_default = defineConfig({
  // @ts-expect-error their types are wrong
  plugins: [react()],
  css: { postcss: { plugins: [] } },
  test: {
    include: ["./app/**/*.test.{ts,tsx}"],
    setupFiles: ["./tests/setup/setup-test-env.ts"],
    globalSetup: ["./tests/setup/global-setup.ts"],
    restoreMocks: true,
    coverage: {
      include: ["app/**/*.{ts,tsx}"],
      all: true
    }
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9waGlsaXBwZWxhdHRlbnRpb24vQ29kZS9lcGljLXN0YWNrLW1vbm9yZXBvL2FwcHMvZXBpYy1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9waGlsaXBwZWxhdHRlbnRpb24vQ29kZS9lcGljLXN0YWNrLW1vbm9yZXBvL2FwcHMvZXBpYy1hcHAvdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcGhpbGlwcGVsYXR0ZW50aW9uL0NvZGUvZXBpYy1zdGFjay1tb25vcmVwby9hcHBzL2VwaWMtYXBwL3ZpdGVzdC5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgdGhlaXIgdHlwZXMgYXJlIHdyb25nXG5cdHBsdWdpbnM6IFtyZWFjdCgpXSxcblx0Y3NzOiB7IHBvc3Rjc3M6IHsgcGx1Z2luczogW10gfSB9LFxuXHR0ZXN0OiB7XG5cdFx0aW5jbHVkZTogWycuL2FwcC8qKi8qLnRlc3Que3RzLHRzeH0nXSxcblx0XHRzZXR1cEZpbGVzOiBbJy4vdGVzdHMvc2V0dXAvc2V0dXAtdGVzdC1lbnYudHMnXSxcblx0XHRnbG9iYWxTZXR1cDogWycuL3Rlc3RzL3NldHVwL2dsb2JhbC1zZXR1cC50cyddLFxuXHRcdHJlc3RvcmVNb2NrczogdHJ1ZSxcblx0XHRjb3ZlcmFnZToge1xuXHRcdFx0aW5jbHVkZTogWydhcHAvKiovKi57dHMsdHN4fSddLFxuXHRcdFx0YWxsOiB0cnVlLFxuXHRcdH0sXG5cdH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHdCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTNCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUU7QUFBQSxFQUNoQyxNQUFNO0FBQUEsSUFDTCxTQUFTLENBQUMsMEJBQTBCO0FBQUEsSUFDcEMsWUFBWSxDQUFDLGlDQUFpQztBQUFBLElBQzlDLGFBQWEsQ0FBQywrQkFBK0I7QUFBQSxJQUM3QyxjQUFjO0FBQUEsSUFDZCxVQUFVO0FBQUEsTUFDVCxTQUFTLENBQUMsbUJBQW1CO0FBQUEsTUFDN0IsS0FBSztBQUFBLElBQ047QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
