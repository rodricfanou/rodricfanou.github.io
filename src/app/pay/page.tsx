import FadeIn from "@/components/FadeIn";

export default function Pay() {
  return (
    <main className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center relative md:py-12 md:px-8">

      {/* Hero */}
      <section
        className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden md:rounded-3xl"
        style={{
          backgroundImage: "url('/headerimages/1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>

        <div className="relative px-6 py-12 md:px-16 md:py-16">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg md:text-5xl">
                Pay Bill Online
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl">
                Secure and convenient payment options for your services.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Payment Options */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Make a Payment
            </h2>
            <p className="text-gray-700 text-base leading-relaxed md:text-lg max-w-2xl">
              Click the button below to securely process your payment. We accept all major credit cards and digital wallets.
            </p>
            
            <a
              href="https://venmo.com/@roderickfun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Pay Now
            </a>

            <p className="text-gray-500 text-sm mt-4">
              If you have any issues with your payment, please contact us at{" "}
              <a href="mailto:roderick@roderickfanou.com" className="text-blue-600 hover:underline">
                roderick@roderickfanou.com
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
