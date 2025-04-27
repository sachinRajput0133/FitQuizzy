"use client";

import Link from "next/link";

export default function Home() {
  // Weight loss quiz data
  const quiz = {
    id: "weight-loss",
    title: "Find Your Perfect Weight Loss Solution",
    description:
      "Answer a few questions to discover the best weight loss products for your goals and lifestyle.",
    questions: 5,
  };

  // Health benefits of weight loss
  const benefits = [
    {
      title: "Increased Energy",
      description: "Shed excess weight and feel more energetic throughout the day",
      icon: (
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
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Better Sleep",
      description: "Improve sleep quality and duration with healthy weight management",
      icon: (
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
          <path d="M12 19c0-4.2-2.8-7-7-7m14 0c-4.2 0-7 2.8-7 7m0-14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      title: "Reduced Health Risks",
      description: "Lower risk of heart disease, diabetes, and other health conditions",
      icon: (
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
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      ),
    },
  ];

  // Testimonials from users who had success with the products
  const testimonials = [
    {
      name: "Sarah J.",
      quote: "I lost 15 pounds in just 2 months using the recommended supplement. It helped control my cravings and gave me more energy for workouts!",
      stars: 5,
    },
    {
      name: "Michael T.",
      quote: "The personalized approach made all the difference. The quiz matched me with the perfect weight loss program for my busy lifestyle.",
      stars: 5,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Quiz Intro */}
      <main className="flex flex-col items-center w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:text-blue-200 dark:bg-blue-900 rounded-full">
                  Health & Wellness
                </span>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
                  Your Journey to a <span className="text-blue-600 dark:text-blue-400">Healthier You</span> Starts Here
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Discover personalized weight loss solutions tailored to your body, lifestyle, and goals. Take our quick quiz to find products that actually work for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/quiz/${quiz.id}`}
                    className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                  >
                    Take the Weight Loss Quiz
                  </Link>
                  <a
                    href="#how-it-works"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-8 text-sm font-medium text-gray-900 dark:text-gray-100 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl bg-blue-100 dark:bg-blue-900">
                <div className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="64" 
                    height="64" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Quiz Section */}
        <section id="quick-quiz" className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                  Find Your Perfect Weight Loss Solution
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Answer a few simple questions and get personalized product recommendations tailored to your needs.
                </p>
              </div>
              <div className="w-full max-w-3xl p-6 rounded-xl bg-blue-50 dark:bg-blue-900/30 shadow-sm border border-blue-100 dark:border-blue-800">
                <Link
                  href={`/quiz/${quiz.id}`}
                  className="inline-flex w-full h-16 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-700 px-8 text-lg font-medium text-white shadow transition-colors hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                >
                  Start Your Weight Loss Quiz Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                How It Works
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Our science-based approach helps you find the right weight loss products for your body type and goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Take the Quiz</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Answer simple questions about your weight loss goals, diet, and lifestyle.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Get Personalized Results</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Receive product recommendations specifically tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Start Your Journey</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Purchase your recommended products and begin your weight loss journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                Benefits of Healthy Weight Loss
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Achieving a healthy weight can transform your life in many ways.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 text-blue-600 dark:text-blue-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                Success Stories
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                See how our personalized recommendations have helped others achieve their weight loss goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
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
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-yellow-400"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</blockquote>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href={`/quiz/${quiz.id}`}
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
              >
                Take the Quiz Now
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-16 bg-blue-600 dark:bg-blue-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Life?
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Take our quiz now and discover the perfect weight loss solutions for your body and lifestyle.
              </p>
              <Link
                href={`/quiz/${quiz.id}`}
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 dark:text-blue-700 shadow transition-colors hover:bg-blue-50 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start Your Weight Loss Journey
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
