import { authMiddleware } from '@clerk/nextjs'

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

export default authMiddleware({
  publicRoutes: [
    '/',
    '/faqs',
    '/clase1-introduccion-a-linux',
    '/clase-2-instalcion',
    '/clase2-instalacion-de-ubuntu',
    '/clase3-introduccion-a-la-terminal',
    '/clase4-permisos-en-linux',
    '/clase5-personalizacion-de-la-terminal',
    '/clase6-introduccion-a-bash',
    '/comments',
  ],
  ignoredRoutes: [
    '/_next/static/media/',
    '/_next/static/chunks/',
    '/images/',
    '/favicon.ico',
  ],
})
