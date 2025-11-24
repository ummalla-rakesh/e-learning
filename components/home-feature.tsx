import type React from "react"
import { Code2, TestTubes, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  details: string
}

const FeatureCard = ({ icon, title, description, details }: FeatureCardProps) => {
  return (
    <Card className="border border-border hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-8 pb-6">
        <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-base font-medium text-foreground mb-3">{description}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{details}</p>
      </CardContent>
    </Card>
  )
}

export function FeatureCards() {
  const features: FeatureCardProps[] = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Development",
      description: "Master full-stack development with comprehensive courses.",
      details:
        "Learn everything from frontend frameworks to backend architecture. Our experts guide you through real-world projects and best practices in web development.",
    },
    {
      icon: <TestTubes className="w-6 h-6" />,
      title: "Testing",
      description: "Ensure code quality with professional testing strategies.",
      details:
        "Discover unit testing, integration testing, and end-to-end testing techniques. Write robust tests that catch bugs before they reach production.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deployment",
      description: "Deploy applications confidently to production environments.",
      details:
        "Learn CI/CD pipelines, containerization, and cloud deployment. Master the tools and strategies to ship applications reliably and securely.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-pretty">
            Everything you need to grow as a developer.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive learning paths covering development, testing, and deployment—all in one platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
