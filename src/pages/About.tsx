import { icons } from "@/components/icons";

function About() {
  return (
    <div className="mb-14 mt-20 px-6 md:px-20">
      <h1 className="mb-12 text-center text-4xl font-extrabold text-gray-800">
        About Us
      </h1>

      <div className="mx-auto mb-16 max-w-4xl text-center">
        <p className="text-lg leading-relaxed text-gray-600">
          We are passionate about bringing the best products to your fingertips.
          Our mission is to make shopping easier, faster, and more enjoyable for
          everyone. With a global reach and a customer-first mindset, we strive
          to exceed expectations.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
            <icons.rocket className="h-8 w-8" />
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Our Vision</h2>
            <p className="leading-relaxed text-gray-600">
              To become a leading e-commerce platform trusted by millions
              worldwide.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="rounded-full bg-pink-100 p-3 text-pink-600">
            <icons.heart className="h-8 w-8" />
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Our Values</h2>
            <p className="leading-relaxed text-gray-600">
              Integrity, passion, and a deep commitment to serving our
              customers.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="rounded-full bg-green-100 p-3 text-green-600">
            <icons.globle className="h-8 w-8" />
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Global Reach</h2>
            <p className="leading-relaxed text-gray-600">
              Connecting people and products across the globe, beyond borders.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
            <icons.people className="h-8 w-8" />
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Our Team</h2>
            <p className="leading-relaxed text-gray-600">
              A passionate group of dreamers, thinkers, and doers working
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
