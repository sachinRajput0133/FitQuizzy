import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-8 text-muted-foreground">
          Have questions, feedback, or suggestions? We'd love to hear from you!
        </p>
        
        <form className="space-y-6 max-w-xl">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="Your email address"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="Your message"
            />
          </div>
          
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Send Message
          </button>
        </form>
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}