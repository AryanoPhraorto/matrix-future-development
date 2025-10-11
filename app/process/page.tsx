export default function Process() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8"><span className="text-green-400">Matrix Future - DeepSeek</span> Process</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">1. Discovery</h3>
            <p>We analyze your needs and define project requirements.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">2. Development</h3>
            <p>We build your solution using cutting-edge technologies.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">3. Delivery</h3>
            <p>We deploy and maintain your application.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
