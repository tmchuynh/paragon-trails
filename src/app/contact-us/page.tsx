export default function ContactUsPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4 min-h-screen">
      <h1 className="mb-4 font-bold text-3xl">Contact Us</h1>
      <p className="mb-8 text-lg">
        We would love to hear from you! Please fill out the form below or reach
        us at:
      </p>
      <form className="space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border border-gray-300 rounded w-full h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded w-full text-white transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
