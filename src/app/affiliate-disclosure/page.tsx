import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AffiliateDisclosurePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <p className="mt-6">
            Affiliate Quiz participates in various affiliate marketing programs, which means we may earn commissions on products purchased through our links to retailer sites.
          </p>
          
          <p>
            When you click on a link and make a purchase, we may receive a small commission at no additional cost to you. This helps support our site and allows us to continue providing valuable content and services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Choose Products</h2>
          <p>
            Our product recommendations are based on thorough research, testing, and user feedback. We only recommend products we believe will provide value to our users, regardless of whether we earn a commission.
          </p>
          <p>
            The commissions we receive do not influence our product recommendations or the results of our quizzes. Our primary goal is to help you find the best products for your specific needs.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Disclosure Statement</h2>
          <p>
            As per the Federal Trade Commission's guidelines, we want to be transparent about our affiliate relationships. Any page on our website that contains affiliate links will include a disclosure statement at the top or bottom of the page.
          </p>
          
          <p className="mt-6">
            If you have any questions about our affiliate disclosure policy, please contact us.
          </p>
        </div>
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}