"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Search, ChevronDown, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Course {
  id: number
  title: string
  image: string
  category: string
  duration: string
  description: string
  instructor: {
    name: string
    avatar: string
  }
  price: {
    original: number
    current: number
  }
  subject: string
  partner: string
  program: string
  language: string
  availability: string
  learningType: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    image: "/aws-architect-course.jpg",
    category: "Design",
    duration: "3 Month",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: { name: "Lina", avatar: "/female-instructor.jpg" },
    price: { original: 100, current: 80 },
    subject: "Cloud Computing",
    partner: "AWS",
    program: "Professional",
    language: "English",
    availability: "Self-Paced",
    learningType: "Online",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    image: "/laptop-coffee.jpg",
    category: "Design",
    duration: "3 Month",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: { name: "Lina", avatar: "/female-instructor.jpg" },
    price: { original: 100, current: 80 },
    subject: "Cloud Computing",
    partner: "AWS",
    program: "Professional",
    language: "English",
    availability: "Self-Paced",
    learningType: "Online",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    image: "/workspace-setup.jpg",
    category: "Design",
    duration: "3 Month",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: { name: "Lina", avatar: "/female-instructor.jpg" },
    price: { original: 100, current: 80 },
    subject: "Cloud Computing",
    partner: "AWS",
    program: "Professional",
    language: "English",
    availability: "Self-Paced",
    learningType: "Online",
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect",
    image: "/developer-workspace.jpg",
    category: "Design",
    duration: "3 Month",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: { name: "Lina", avatar: "/female-instructor.jpg" },
    price: { original: 100, current: 80 },
    subject: "Cloud Computing",
    partner: "AWS",
    program: "Professional",
    language: "English",
    availability: "Self-Paced",
    learningType: "Online",
  },
  {
    id: 5,
    title: "Docker Fundamentals",
    image: "/docker-container.jpg",
    category: "DevOps",
    duration: "2 Month",
    description: "Learn containerization with Docker and Docker Compose",
    instructor: { name: "John", avatar: "/male-instructor.jpg" },
    price: { original: 90, current: 60 },
    subject: "DevOps",
    partner: "Docker",
    program: "Intermediate",
    language: "English",
    availability: "Self-Paced",
    learningType: "Online",
  },
  {
    id: 6,
    title: "Kubernetes Advanced",
    image: "/kubernetes-orchestration.jpg",
    category: "DevOps",
    duration: "4 Month",
    description: "Master Kubernetes orchestration and microservices deployment",
    instructor: { name: "Sarah", avatar: "/female-instructor.jpg" },
    price: { original: 150, current: 120 },
    subject: "Cloud Computing",
    partner: "CNCF",
    program: "Advanced",
    language: "English",
    availability: "Live Sessions",
    learningType: "Online",
  },
  {
    id: 7,
    title: "React Pro",
    image: "/react-development.jpg",
    category: "Design",
    duration: "3 Month",
    description: "Build production-ready React applications with advanced patterns",
    instructor: { name: "Mike", avatar: "/male-instructor.jpg" },
    price: { original: 110, current: 85 },
    subject: "Web Development",
    partner: "ReactJS",
    program: "Professional",
    language: "English",
    availability: "Self-Paced",
    learningType: "Online",
  },
  {
    id: 8,
    title: "Python Data Science",
    image: "/python-data-science.jpg",
    category: "Data Science",
    duration: "5 Month",
    description: "Complete data science journey with Python and machine learning",
    instructor: { name: "Emma", avatar: "/female-instructor.jpg" },
    price: { original: 200, current: 150 },
    subject: "Data Science",
    partner: "DataCamp",
    program: "Professional",
    language: "English",
    availability: "Self-Paced",
    learningType: "Online",
  },
]

export default function CourseFinder() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    subject: "",
    partner: "",
    program: "",
    language: "",
    availability: "",
    learningType: "",
  })

  // Get unique filter options from courses
  const filterOptions = useMemo(() => {
    return {
      subjects: [...new Set(courses.map((c) => c.subject))].sort(),
      partners: [...new Set(courses.map((c) => c.partner))].sort(),
      programs: [...new Set(courses.map((c) => c.program))].sort(),
      languages: [...new Set(courses.map((c) => c.language))].sort(),
      availabilities: [...new Set(courses.map((c) => c.availability))].sort(),
      learningTypes: [...new Set(courses.map((c) => c.learningType))].sort(),
    }
  }, [])

  // Filter and search courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesFilters =
        (!filters.subject || course.subject === filters.subject) &&
        (!filters.partner || course.partner === filters.partner) &&
        (!filters.program || course.program === filters.program) &&
        (!filters.language || course.language === filters.language) &&
        (!filters.availability || course.availability === filters.availability) &&
        (!filters.learningType || course.learningType === filters.learningType)

      return matchesSearch && matchesFilters
    })
  }, [searchQuery, filters])

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? "" : value,
    }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setFilters({
      subject: "",
      partner: "",
      program: "",
      language: "",
      availability: "",
      learningType: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Search */}
      <div
        className="relative bg-gradient-to-r from-primary/20 to-primary/10 py-16 px-4"
        style={{
          backgroundImage: "url(/placeholder.svg?height=400&width=1200&query=classroom-background)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-balance text-4xl font-bold text-white mb-2">Find Your Perfect Course</h1>
            <p className="text-white/90">Discover and enroll in top-quality courses tailored to your goals</p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <div className="flex-1 relative">
              <Input
                placeholder="Search your favourite course"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-lg border-0 bg-white text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </form>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Subject", key: "subject", options: filterOptions.subjects },
              { label: "Partner", key: "partner", options: filterOptions.partners },
              { label: "Program", key: "program", options: filterOptions.programs },
              { label: "Language", key: "language", options: filterOptions.languages },
              { label: "Availability", key: "availability", options: filterOptions.availabilities },
              { label: "Learning Type", key: "learningType", options: filterOptions.learningTypes },
            ].map(({ label, key, options }) => (
              <div key={key} className="relative group">
                <button className="flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted transition-colors">
                  {label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white border border-border rounded-lg shadow-lg z-10 min-w-48">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterChange(key as keyof typeof filters, option)}
                      className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors ${
                        filters[key as keyof typeof filters] === option ? "bg-primary/10 text-primary font-medium" : ""
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                  <button
                    onClick={() => handleFilterChange(key as keyof typeof filters, "")}
                    className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted border-t border-border"
                  >
                    Clear
                  </button>
                </div>
              </div>
            ))}
            {Object.values(filters).some((f) => f) && (
              <Button
                onClick={handleClearFilters}
                variant="outline"
                className="text-muted-foreground hover:text-foreground bg-transparent"
              >
                Clear All Filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        {filteredCourses.length > 0 ? (
          <>
            <p className="text-sm text-muted-foreground mb-8">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Course Image */}
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white text-foreground text-xs font-medium px-2 py-1 rounded">
                      {course.category}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-4 flex flex-col h-full">
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">{course.title}</h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-grow">{course.description}</p>

                    {/* Instructor */}
                    <div className="flex items-center gap-2 border-t border-border pt-3 pb-3">
                      <img
                        src={course.instructor.avatar || "/placeholder.svg"}
                        alt={course.instructor.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-xs font-medium text-card-foreground">{course.instructor.name}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground line-through">${course.price.original}</span>
                      <span className="text-lg font-bold text-primary">${course.price.current}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
            <Button onClick={handleClearFilters} variant="outline" className="mt-4 bg-transparent">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
