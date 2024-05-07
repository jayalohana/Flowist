import { clerkMiddleware } from "@clerk/nextjs/server";
import { authMiddleware } from "@clerk/nextjs";

// Middleware for Clerk authentication
export const clerkAuthMiddleware = clerkMiddleware();

// Middleware for authentication with public routes
export const publicAuthMiddleware = authMiddleware({
  publicRoutes: ["/site", "/api/uploadthing"],
});

// Define additional config for routes
export const config = {
  // Define routes excluding files and Next.js specific routes
  // Also includes "/api" and "/trpc" routes
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
