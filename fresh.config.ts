import { defineConfig } from "$fresh/server.ts";

export default defineConfig({
  server: {
    onRequest: async (request, context) => {
      const url = new URL(request.url);
      const response = await context.next();

      if (url.pathname.endsWith(".svg")) {
        response.headers.set("Content-Type", "image/svg+xml");
      } else if (url.pathname.endsWith(".png")) {
        response.headers.set("Content-Type", "image/png");
      } else if (
        url.pathname.endsWith(".jpg") || url.pathname.endsWith(".jpeg")
      ) {
        response.headers.set("Content-Type", "image/jpeg");
      } else if (url.pathname.endsWith(".gif")) {
        response.headers.set("Content-Type", "image/gif");
      } else if (url.pathname.endsWith(".webp")) {
        response.headers.set("Content-Type", "image/webp");
      } else if (url.pathname.endsWith(".ico")) {
        response.headers.set("Content-Type", "image/x-icon");
      }

      return response;
    },
  },
});
