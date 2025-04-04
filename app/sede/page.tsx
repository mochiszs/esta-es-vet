import Image from "next/image";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Sede() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      {/* Sección principal */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#09465b]">Nuestra Sede</h1>

          {/* Contenedor de imágenes y texto de ubicación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Imagen exterior de la clínica */}
            <div className="lg:col-span-1">
              <Image
                src="/nuevasfotos/UBICACIÓN 1_Mesa de trabajo 1.jpg"
                alt="Exterior de la clínica"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Sección de "Cómo Llegar" (moved to left) */}
            <div className="lg:col-span-1">
              <div className="bg-[#09465b] rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center text-[#f7f3e6]">Cómo Llegar</h2>
                <div className="aspect-video w-full mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6043298304734!2d-77.02419582400184!3d-12.0755966425538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6f8d48c6eb3%3A0x87c85d3e96f8266f!2sAv.%2013%20de%20Enero%202201%2C%20San%20Juan%20de%20Lurigancho%2015412%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1712047156483!5m2!1ses!2spe"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la clínica veterinaria"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Detalles de ubicación (moved to right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="h-full bg-[#09465b] rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#f7f3e6]">Ubicación</h2>
                <p className="text-[#f7f3e6]/90 mb-4">Estamos ubicados en una zona de fácil acceso:</p>
                <p className="text-[#f7f3e6]/90 mb-6">
                  <strong>Dirección:</strong>
                  <br />
                  Av. 13 de enero N°2201 La Huayrona SJL
                </p>
                <p className="text-[#f7f3e6]/90 mb-6">
                  <strong>Horario de atención:</strong>
                  <br />
                  Lunes a Sábado: 9:00 am - 8:00 pm
                </p>
                <p className="text-[#f7f3e6]/90">
                  <strong>Contacto:</strong>
                  <br />
                  Teléfono: +51 966 842 258
                  <br />
                  Email: info@clinicaveterinaria.com
                </p>
              </div>
            </div>

            {/* Imagen interior de la clínica */}
            <div className="lg:col-span-1">
              <Image
                src="/nuevasfotos/FOTO VET_Mesa de trabajo 1.jpg"
                alt="Interior de la clínica"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Botón de WhatsApp */}
      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  );
}
