export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">Ready to start your project? Contact us today!</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <p>contact@matrixfuture.dev</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Services</label>
                <p>Custom Web Apps • AI Solutions • Data Analytics • SaaS Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
