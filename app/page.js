'use client'

import { useState, useEffect } from 'react'
import { Bell, Menu, User, X, ChevronRight, Star, Dumbbell, Users, Calendar,Check,Zap,Award, Clock,Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'


const classes = [
  { id: 1, name: 'Yoga', instructor: 'Ana García', capacity: 20, enrolled: 15 , image: '/yoga.jpg'},
  { id: 2, name: 'Spinning', instructor: 'Carlos Ruiz', capacity: 15, enrolled: 10 , image: '/spinning.jpg'},
  { id: 3, name: 'Zumba', instructor: 'María López', capacity: 25, enrolled: 20 , image: '/zumba.jpg'},
]

const memberships = [
  { id: 1, name: 'Básica', price: 29.99, features: ['Acceso a sala de pesas', 'Casillero gratis'] },
  { id: 2, name: 'Premium', price: 49.99, features: ['Acceso a sala de pesas', 'Casillero gratis', 'Clases ilimitadas', 'Acceso a piscina'] },
  { id: 3, name: 'VIP', price: 79.99, features: ['Acceso a sala de pesas', 'Casillero gratis', 'Clases ilimitadas', 'Acceso a piscina', 'Entrenador personal', 'Acceso 24/7'] },
]

const schedule = [
  { id: 1, day: 'Lunes', classes: ['Yoga 9:00', 'Spinning 18:00', 'Zumba 20:00'] },
  { id: 2, day: 'Martes', classes: ['Pilates 10:00', 'Boxeo 19:00'] },
  { id: 3, day: 'Miércoles', classes: ['Yoga 9:00', 'Spinning 18:00', 'Zumba 20:00'] },
  { id: 4, day: 'Jueves', classes: ['Pilates 10:00', 'Boxeo 19:00'] },
  { id: 5, day: 'Viernes', classes: ['Yoga 9:00', 'Spinning 18:00', 'Zumba 20:00'] },
  { id: 6, day: 'Sábado', classes: ['Yoga 10:00', 'Zumba 12:00'] },
  { id: 7, day: 'Domingo', classes: ['Pilates 11:00'] },
]

export default function GymApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [enrolledClasses, setEnrolledClasses] = useState([])
  const [selectedMembership, setSelectedMembership] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const enrollInClass = (classId) => {
    if (!enrolledClasses.includes(classId)) {
      setEnrolledClasses([...enrolledClasses, classId])
    }
  }

  const selectMembership = (membershipId) => {
    setSelectedMembership(membershipId)
  }

  const testimonials = [
    {
      id: 1,
      name: "María Rodríguez",
      age: 28,
      occupation: "Diseñadora Gráfica",
      photo: "/Maria.jpg",
      quote: "FitLife Gym ha transformado completamente mi rutina diaria. Las clases de yoga me han ayudado a encontrar equilibrio en mi agitada vida profesional, mientras que el entrenamiento de fuerza me ha dado la confianza que siempre busqué. Los entrenadores son increíblemente atentos y el ambiente es muy motivador. ¡No puedo imaginar mi vida sin FitLife ahora!",
      rating: 5,
      memberSince: "2022"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      age: 35,
      occupation: "Ingeniero de Software",
      photo: "/Carlos.jpg",
      quote: "Como alguien que pasa mucho tiempo frente a la computadora, FitLife Gym ha sido un salvavidas. Las clases de spinning son mi escape perfecto después de un largo día de trabajo. He notado una mejora significativa en mi energía y concentración. Además, la comunidad aquí es fantástica, he hecho nuevos amigos y eso me mantiene motivado para seguir viniendo.",
      rating: 5,
      memberSince: "2021"
    },
    {
      id: 3,
      name: "Laura Sánchez",
      age: 42,
      occupation: "Profesora",
      photo: "/Laura.jpg",
      quote: "Después de tener a mis hijos, pensé que nunca recuperaría mi forma física. FitLife Gym me demostró lo contrario. Las clases de Zumba son mi favoritas, ¡son tan divertidas que ni siquiera siento que estoy haciendo ejercicio! Los entrenadores son muy comprensivos y siempre ofrecen modificaciones para adaptarse a diferentes niveles. Gracias a FitLife, me siento más fuerte y saludable que nunca.",
      rating: 5,
      memberSince: "2023"
    }
  ]

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-24">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="/Hero.jpg" alt="Gym background" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="relative z-10 text-center text-white">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-extrabold mb-4"
                >
                  Transforma Tu Vida
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8"
                >
                  En FitLife Gym, cada entrenamiento te acerca a tus metas
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Comienza Hoy
                  </Button>
                </motion.div>
              </div>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <ChevronRight size={40} className="animate-bounce rotate-90 text-white" />
              </div>
            </section>

            {/* About Section */}
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">Sobre FitLife Gym</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img src="/about.jpg" alt="Gym interior" className="rounded-lg shadow-lg" />
                </div>
                <div className="space-y-6">
                  <p className="text-lg">
                    En FitLife Gym, creemos que el fitness es más que solo ejercicio. Es un estilo de vida que te empodera para ser la mejor versión de ti mismo.
                  </p>
                  <p className="text-lg">
                    Con instalaciones de última generación, entrenadores expertos y una comunidad de apoyo, te proporcionamos todas las herramientas necesarias para alcanzar tus objetivos de fitness.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Star className="text-yellow-500 mr-2" />
                      <span>Equipamiento de vanguardia</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="text-yellow-500 mr-2" />
                      <span>Clases grupales dinámicas</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="text-yellow-500 mr-2" />
                      <span>Entrenadores certificados</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="text-yellow-500 mr-2" />
                      <span>Ambiente motivador y amigable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">¿Por qué elegir FitLife Gym?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <Dumbbell size={48} className="mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Equipamiento de última generación</h3>
                    <p>Disfruta de nuestras instalaciones con la mejor tecnología en fitness.</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <Users size={48} className="mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Clases variadas</h3>
                    <p>Desde yoga hasta spinning, tenemos una clase para cada objetivo.</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <Calendar size={48} className="mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Horarios flexibles</h3>
                    <p>Abierto todos los días con horarios que se adaptan a tu estilo de vida.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/30">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Lo que dicen nuestros miembros</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-gray-600">{testimonial.occupation}, {testimonial.age} años</p>
                          </div>
                        </div>
                        <div className="mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="inline-block w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="relative">
                          <Quote className="absolute top-0 left-0 text-primary/20 w-8 h-8 -mt-4 -ml-4" />
                          <p className="text-gray-700 italic mb-4 pl-6">"{testimonial.quote}"</p>
                        </blockquote>
                        <p className="text-sm text-gray-600">Miembro desde: {testimonial.memberSince}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )
      case 'classes':
        return (
          <div className="space-y-16">
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/clases.jpg" alt="Classes background" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center text-white mb-8">Nuestras Clases</h2>
              <p className="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
                Descubre una variedad de clases diseñadas para desafiarte y ayudarte a alcanzar tus metas fitness.
              </p>
            </div>
          </section>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((cls) => (
                <motion.div 
                  key={cls.id} 
                  className="bg-card overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={cls.image} alt={cls.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{cls.name}</h3>
                    <p className="mb-2">Instructor: {cls.instructor}</p>
                    <p className="mb-4">Capacidad: {cls.enrolled}/{cls.capacity}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}></div>
                    </div>
                    <Button 
                      onClick={() => enrollInClass(cls.id)}
                      disabled={enrolledClasses.includes(cls.id)}
                      className="w-full"
                    >
                      {enrolledClasses.includes(cls.id) ? 'Inscrito' : 'Inscribirse'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        )
      case 'memberships':
        return (
          <div className="space-y-16">
            <section className="relative py-20 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="/membresia.jpg" alt="Memberships background" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </div>
              <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-white mb-8">Membresías</h2>
                <p className="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
                  Elige el plan perfecto para ti y comienza tu viaje hacia una vida más saludable y en forma.
                </p>
              </div>
            </section>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {memberships.map((membership) => (
                  <motion.div 
                    key={membership.id} 
                    className={`bg-gradient-to-br ${membership.color} text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h3 className="text-3xl font-semibold mb-4">{membership.name}</h3>
                    <p className="text-4xl font-bold mb-6">${membership.price}<span className="text-lg font-normal">/mes</span></p>
                    <ul className="mb-8 space-y-3">
                      {membership.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => selectMembership(membership.id)}
                      variant={selectedMembership === membership.id ? "secondary" : "default"}
                      className="w-full bg-white text-primary hover:bg-white/90"
                    >
                      {selectedMembership === membership.id ? 'Seleccionada' : 'Seleccionar'}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'schedule':
        return (
          <div className="space-y-16">
            <section className="relative py-20 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="/Horario.jpg" alt="Schedule background" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </div>
              <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-white mb-8">Horario de Clases</h2>
                <p className="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
                  Planifica tu semana y no te pierdas ninguna de nuestras emocionantes clases.
                </p>
              </div>
            </section>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {schedule.map((day) => (
                  <motion.div 
                    key={day.id} 
                    className="bg-card p-6 rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                      <Calendar className="w-6 h-6 mr-2 text-primary" />
                      {day.day}
                    </h3>
                    <ul className="space-y-3">
                      {day.classes.map((cls, index) => (
                        <li key={index} className="bg-primary/10 p-3 rounded-md flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-primary" />
                          {cls}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="space-y-16">
            <section className="relative py-20 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="/perfil.jpg" alt="Profile background" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </div>
              <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-white mb-8">Mi Perfil</h2>
                <p className="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
                  Revisa tu progreso y gestiona tu membresía en un solo lugar.
                </p>
              </div>
            </section>
            <div className="container mx-auto px-4">
              <div className="bg-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-8">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                    <User size={64} className="text-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-semibold">Juan Pérez</h3>
                    <p className="text-muted-foreground">Miembro desde: Enero 2023</p>
                    <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Fitness Enthusiast</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Yoga Lover</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Early Bird</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 flex items-center">
                      <Zap className="w-6 h-6 mr-2 text-primary" />
                      Clases Inscritas
                    </h4>
                    <ul className="space-y-3">
                      {enrolledClasses.map((classId) => {
                        const cls = classes.find(c => c.id === classId);
                        return (
                          <li key={classId} className="bg-primary/10 p-3 rounded-md flex items-center">
                            <Dumbbell className="w-5 h-5 mr-2 text-primary" />
                            {cls.name} - {cls.instructor}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-primary" />
                      Membresía Actual
                    </h4>
                    {selectedMembership ? (
                      <div className="bg-primary/10 p-4 rounded-md">
                        <p className="text-xl font-semibold">{memberships.find(m => m.id === selectedMembership).name}</p>
                        <p className="text-muted-foreground">Renovación: 15 de cada mes</p>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No has seleccionado una membresía aún.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return <div>Página no encontrada</div>
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-primary shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">FitLife Gym</h1>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-white" onClick={() => setCurrentPage('home')}>Inicio</Button>
            <Button variant="ghost" className="text-white" onClick={() => setCurrentPage('classes')}>Clases</Button>
            <Button variant="ghost" className="text-white" onClick={() => setCurrentPage('memberships')}>Membresías</Button>
            <Button variant="ghost" className="text-white" onClick={() => setCurrentPage('schedule')}>Horario</Button>
            <Button variant="ghost" className="text-white" onClick={() => setCurrentPage('profile')}>Mi Perfil</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary text-primary-foreground fixed top-16 left-0 right-0 z-40"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              <Button variant="ghost" className="text-white" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>Inicio</Button>
              <Button variant="ghost" className="text-white" onClick={() => { setCurrentPage('classes'); setIsMenuOpen(false); }}>Clases</Button>
              <Button variant="ghost" className="text-white" onClick={() => { setCurrentPage('memberships'); setIsMenuOpen(false); }}>Membresías</Button>
              <Button variant="ghost" className="text-white" onClick={() => { setCurrentPage('schedule'); setIsMenuOpen(false); }}>Horario</Button>
              <Button variant="ghost" className="text-white" onClick={() => { setCurrentPage('profile'); setIsMenuOpen(false); }}>Mi Perfil</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="pt-16">
        {renderPage()}
      </main>
      <footer className="bg-primary text-primary-foreground mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">FitLife Gym</h3>
              <p>Transformando vidas a través del fitness desde 2010.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Inicio</a></li>
                <li><a href="#" className="hover:underline">Clases</a></li>
                <li><a href="#" className="hover:underline">Membresías</a></li>
                <li><a href="#" className="hover:underline">Horario</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p>123 Calle Fitness</p>
              <p>Ciudad Deportiva, CP 12345</p>
              <p>Tel: (123) 456-7890</p>
              <p>Email: info@fitlifegym.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-foreground/80">Facebook</a>
                <a href="#" className="hover:text-primary-foreground/80">Instagram</a>
                <a href="#" className="hover:text-primary-foreground/80">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; 2023 FitLife Gym. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}