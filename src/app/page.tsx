import Link from "next/link";


export default function Home() {
  // Sample quiz data - in a real app, you'd fetch this from an API
  const quizzes = [
    {
      id: "weight-loss",
      title: "Find Your Perfect Weight Loss Solution",
      description:
        "Answer a few questions to discover the best weight loss products for your goals and lifestyle.",
      image: "/images/weight-loss-quiz.jpg",
      questions: 5,
    },
    // {
    //   id: "smartphone-finder",
    //   title: "Smartphone Finder Quiz",
    //   description: "Not sure which smartphone to buy? Take our quiz to find your perfect match.",
    //   image: "/images/smartphone-quiz.jpg",
    //   questions: 6,
    // },
    // {
    //   id: "gaming-setup",
    //   title: "Ultimate Gaming Setup",
    //   description: "Build your dream gaming setup with personalized recommendations.",
    //   image: "/images/gaming-quiz.jpg",
    //   questions: 7,
    // },
  ];

  return (
    <div className="flex  flex-col border w-full">
      <main className="flex  justify-center items-center h-full !bg-black  w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted border">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find Your Perfect Products with Interactive Quizzes
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Answer a few simple questions and get personalized product
                  recommendations tailored to your needs.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href={`/quiz/${quizzes[0].id}`}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="quizzes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Interactive Quizzes
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose a quiz below to get started with your personalized
                  recommendations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {quizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {quizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Use Our Quizzes?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our quizzes are designed to help you find the perfect products
                  without the hassle of endless research.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Trusted Recommendations</h3>
                  <p className="text-center text-muted-foreground">
                    We only recommend products we've thoroughly researched and
                    tested.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Personalized Results</h3>
                  <p className="text-center text-muted-foreground">
                    Get recommendations tailored specifically to your needs and
                    preferences.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 22v-5" />
                      <path d="M9 8V2" />
                      <path d="M15 8V2" />
                      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Save Time & Money</h3>
                  <p className="text-center text-muted-foreground">
                    Skip hours of research and find the best value products for
                    your budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      {/* <SiteFooter /> */}
    </div>
  );
}
