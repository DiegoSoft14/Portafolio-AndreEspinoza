import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" });

  // URL dinámica según el entorno
const BACKEND_URL = "https://portfolio-backend-noay.onrender.com/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    console.log('Enviando a:', `${BACKEND_URL}/contact/send`);

    try {
      const response = await fetch(`${BACKEND_URL}/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(formData)
      });

      // Verificar si la respuesta es JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Respuesta no JSON: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Error ${response.status}`);
      }

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: data.message || '¡Mensaje enviado exitosamente!'
        });
        
        // Limpiar formulario
        setFormData({ name: "", lastName: "", email: "", phone: "", message: "" });
        
        setTimeout(() => {
          setSubmitStatus({ success: null, message: "" });
        }, 5000);
        
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: error.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      });
      
      setTimeout(() => {
        setSubmitStatus({ success: null, message: "" });
      }, 5000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resto del código...

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-black py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Introduction & Contact Info */}
          <div className="space-y-12 pt-8">
            {/* Introduction */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-snug">
                Let's create something amazing together!
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Feel free to contact me for projects, collaborations, or web development 
                inquiries through the contact form or email:
              </p>
            </div>

            {/* Contact Information */}
<div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mr-3"></span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a 
                      href="mailto:diegoespinoza1405@gmail.com"
                      className="text-white text-lg font-medium hover:text-cyan-400 transition-colors break-words overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        wordBreak: 'break-all'
                      }}
                    >
                      diegoespinoza1405@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <a 
                      href="tel:+51978380151"
                      className="text-white text-lg font-medium hover:text-emerald-400 transition-colors leading-snug"
                    >
                      +51 978 380 151
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white text-lg font-medium leading-snug">Lima, Perú</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative pt-8">
            {/* Mensaje de estado */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-xl border ${
                submitStatus.success 
                  ? 'bg-emerald-900/20 border-emerald-500/30 text-emerald-300' 
                  : 'bg-red-900/20 border-red-500/30 text-red-300'
              }`}>
                <div className="flex items-center">
                  {submitStatus.success ? (
                    <>
                      {/* Check básico normal */}
                      <svg className="w-5 h-5 mr-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{submitStatus.message}</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{submitStatus.message}</span>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Let's work together!</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">First Name </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300"
                      placeholder="John"
                      required
                      minLength="2"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300"
                    placeholder="+51 123 456 789"
                    pattern="\+\d{1,3}[-\s]?\d{1,14}"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Message </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 resize-none"
                    placeholder="I'm available for job opportunities, and to join your development team"
                    required
                    minLength="10"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending message...
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Now
                      </div>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}