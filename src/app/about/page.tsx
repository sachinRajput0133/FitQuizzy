import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About Affiliate Quiz</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Affiliate Quiz is a platform dedicated to helping consumers find the perfect products for their needs through interactive quizzes and personalized recommendations.
          </p>
          <p>
            Our team of experts researches and tests products across various categories to provide honest, unbiased recommendations. We believe that finding the right product shouldn't be a hassle, which is why we've created these interactive quizzes to simplify your decision-making process.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to help consumers make informed purchasing decisions by providing personalized product recommendations based on their specific needs and preferences.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Affiliate Disclosure</h2>
          <p>
            Affiliate Quiz participates in various affiliate marketing programs, which means we may earn commissions on products purchased through our links. This doesn't affect our recommendations, as we only suggest products we genuinely believe in.
          </p>
        </div>
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}