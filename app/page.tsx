'use client'

import { useState, useEffect } from 'react'
import { Menu, GraduationCap, Mail, Linkedin} from 'lucide-react'
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { motion } from "framer-motion"
import Head from 'next/head'

export default function MedicalPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <div className={`min-h-screen w-full transition-colors duration-300 lg:px-40 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Head>
          <title>Nhep PhengLeang</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <div className={`min-h-screen w-full transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}>
          {/* Header */}
          <header
              className="sticky top-0 z-50 w-full backdrop-blur-sm bg-gradient-to-t from-background/0 to-background/80 dark:from-gray-900/0 dark:to-gray-900/80 p-7">
            <div className="container max-w-none px-4 md:px-8 lg:px-16 flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6"/>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Pheng</span>
                  <span className="text-xl text-blue-800 dark:text-white">Nhep Phengleang</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <button
                    onClick={() => scrollToSection('skills')}
                    className="text-xl font-medium hover:text-primary transition-colors duration-200 "
                >
                  Skills
                </button>
                <button
                    onClick={() => scrollToSection('research')}
                    className="text-xl font-medium hover:text-primary transition-colors duration-200 "
                >
                  Research
                </button>
                <a href="mailto:nhepleang@gmail.com" className="text-sm">
                  <Mail className="h-5 w-5 hover:text-primary transition-colors duration-200"/>
                </a>
                <a href="https://www.linkedin.com/in/nhep-phengleang-635654343/" target="_blank"
                   rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-primary transition-colors duration-200"/>
                </a>
                <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                  {isDarkMode ? '🌞' : '🌙'}
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                  {isDarkMode ? '🌞' : '🌙'}
                </Button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <Menu className="h-6 w-6"/>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    className="md:hidden border-t"
                >
                  <div className="container max-w-none px-4 md:px-8 lg:px-12 py-4 space-y-4">
                    <button
                        onClick={() => {
                          scrollToSection('skills')
                          setIsMenuOpen(false)
                        }}
                        className="block text-xl font-medium hover:text-primary transition-colors duration-200 hover:shadow shadow-emerald-950"
                    >
                      Skills
                    </button>
                    <button
                        onClick={() => {
                          scrollToSection('research')
                          setIsMenuOpen(false)
                        }}
                        className="block text-sm font-medium hover:text-primary transition-colors duration-200 hover:underline"
                    >
                      Research
                    </button>
                  </div>
                </motion.div>
            )}
          </header>

          {/* Hero Section */}
          <section className="container max-w-none px-4 md:px-8 lg:px-12 py-12 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-sans" >
              <motion.div
                  initial={{opacity: 0, x: -50}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.5}}
                  className="space-y-4"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white font-sans">
                  Nhep Phengleang
                </h1>
                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                  Hello! I&apos;m a pharmacy student at Norton University with a strong passion for healthcare and medicine.
                  As a dedicated learner and health enthusiast, I&apos;ve developed skills in understanding medication,
                  patient care, and the principles of pharmacology, all while striving to deepen my knowledge of the
                  medical field.
                </p>
                <p className="text-gray-500 dark:text-white md:text-xl">
                  Beyond academics, I enjoy engaging in meaningful conversations with my best friend and exploring ways
                  to promote health and well-being. I&apos;m committed to making a positive impact in the pharmaceutical
                  field by combining my skills, enthusiasm, and dedication to improving lives.
                </p>

                <div className="flex justify-center md:justify-start gap-4">
                  <a
                      href="mailto:nhepleang@gmail.com"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-serif"
                  >
                    Text Me!!
                  </a>
                </div>
              </motion.div>
              <motion.div
                  initial={{opacity: 0, x: 50}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.5}}
                  className="flex justify-center"
              >
                <img
                    src="https://cdn.dribbble.com/users/1518775/screenshots/15430153/media/4eea7d352f0a534c535717ed35f11b38.gif"
                    alt="Medical Animation"
                    className="rounded-lg max-w-full h-auto"
                />
              </motion.div>
            </div>
          </section>

          {/* Pharmaceutical Skills */}
          <section id="skills" className="py-12 md:py-24 lg:py-32 dark:bg-gray-800">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="container max-w-none px-4 md:px-8 lg:px-12"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Pharmaceutical Skills</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-xl">
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Clinical Research</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Led multiple clinical trials focusing on innovative drug therapies and treatment methodologies. Conducted research on the efficacy of new antibiotics in treating resistant bacterial strains.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Published Studies</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Multiple publications in peer-reviewed journals on pharmaceutical innovations. Co-authored a paper on the potential of AI in drug discovery, published in the Journal of Medicinal Chemistry.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Pharmacogenomics</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Conducted research on the impact of genetic variations on drug responses. Contributed to a study on personalized medicine approaches in cancer treatment.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Drug Delivery Systems</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Investigated novel drug delivery systems for improved bioavailability. Participated in the development of a nanoparticle-based delivery system for targeted cancer therapy.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Pharmaceutical Analysis</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Expertise in analytical techniques for drug quality control and stability testing. Experience with HPLC, mass spectrometry, and other advanced analytical methods.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Clinical Trials Management</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Managed Phase I and II clinical trials for novel therapeutic compounds. Experienced in protocol development, patient recruitment, and data analysis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </section>

          {/* Research Experience */}
          <section id="research" className="py-12 md:py-24">
            <div className="px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Research Experience</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-xl">
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Clinical Research</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Led multiple clinical trials focusing on innovative drug therapies and treatment methodologies.
                      Conducted research on the efficacy of new antibiotics in treating resistant bacterial strains.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Published Studies</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Multiple publications in peer-reviewed journals on pharmaceutical innovations. Co-authored a paper
                      on the potential of AI in drug discovery, published in the Journal of Medicinal Chemistry.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Pharmacogenomics</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Conducted research on the impact of genetic variations on drug responses. Contributed to a study
                      on personalized medicine approaches in cancer treatment.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Drug Delivery Systems</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Investigated novel drug delivery systems for improved bioavailability. Participated in the
                      development of a nanoparticle-based delivery system for targeted cancer therapy.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Pharmaceutical Analysis</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Expertise in analytical techniques for drug quality control and stability testing. Experience with
                      HPLC, mass spectrometry, and other advanced analytical methods.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Clinical Trials Management</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Managed Phase I and II clinical trials for novel therapeutic compounds. Experienced in protocol
                      development, patient recruitment, and data analysis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="container max-w-none px-4 md:px-8 lg:px-12 py-12 md:py-24 lg:py-32">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="flex flex-col items-center text-center space-y-4"
            >
              <h2 className="text-3xl font-bold mb-8 font-mono">Connect With Me</h2>

              <div className="flex gap-6">

                <a href="mailto:nhepleang@gmail.com" className="text-2xl hover:text-primary transition-colors">
                  <Mail className="h-8 w-8"/>
                </a>
                <a href="https://www.linkedin.com/in/nhep-phengleang-635654343/" target="_blank"
                   rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
                  <Linkedin className="h-8 w-8"/>
                </a>
              </div>
              <p className="mx-auto max-w-[600px] text-amber-600 dark:text-gray-300 md:text-xl italic mt-6">
                &quot;The art of medicine consists of amusing the patient while nature cures the disease.&quot; - Voltaire
              </p>
            </motion.div>
          </section>
        </div>
      </div>
  )
}

