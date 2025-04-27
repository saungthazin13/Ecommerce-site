import { icons } from "@/components/icons";
function Services() {
  return (
    <div className="mb-14 mt-20 px-6 md:px-20">
      <h1 className="mb-12 text-center text-4xl font-extrabold text-gray-800">
        Our Services
      </h1>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Fast Delivery */}
        <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-indigo-100 p-3 text-indigo-600">
              <icons.rocket className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-600">
              Fast Delivery
            </h2>
          </div>
          <p className="leading-relaxed text-gray-600">
            We deliver your products quickly and safely right to your doorstep
            with trusted shipping partners.
          </p>
        </div>

        {/* 24/7 Customer Support */}
        <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-indigo-100 p-3 text-indigo-600">
              <icons.chat className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-600">
              24/7 Customer Support
            </h2>
          </div>
          <p className="leading-relaxed text-gray-600">
            Our dedicated support team is available anytime to help you with any
            concerns or questions.
          </p>
        </div>

        {/* Easy Return Policy */}
        <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-indigo-100 p-3 text-indigo-600">
              <icons.load className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-600">
              Easy Return Policy
            </h2>
          </div>
          <p className="leading-relaxed text-gray-600">
            Not satisfied? Return your product within 14 days with our simple
            and hassle-free return policy.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-indigo-100 p-3 text-indigo-600">
              <icons.lock className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-600">
              Secure Payment
            </h2>
          </div>
          <p className="leading-relaxed text-gray-600">
            Enjoy safe and reliable payment methods with full protection for
            your transactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
