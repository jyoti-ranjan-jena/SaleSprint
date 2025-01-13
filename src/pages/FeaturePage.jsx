import { Sound , Bolt ,Battery , Tick } from "@/components/Icons";

const features = [
  {
    name: "Crystal-Clear Sound Quality",
    description:
      "Experience immersive audio with high-definition sound and deep bass, perfectly tuned for music, calls, and gaming.",
    icon: Sound,
  },
  {
    name: "24-Hour Battery Life",
    description:
      "Enjoy uninterrupted usage with a powerful battery that lasts up to 24 hours on a single charge, ensuring your music never stops.",
    icon: Battery,
  },
  {
    name: "Fast Charging",
    description:
      "Get 12 hours of playtime with just 10 minutes of charging. Never worry about running out of juice when you’re on the go.",
    icon: Bolt,
  },
  {
    name: "Lightweight and Comfortable Design",
    description:
      "Designed for all-day wear, the Realme Wireless 3 Neckband is lightweight and ergonomically crafted for maximum comfort.",
    icon: Tick,
  },
];

export default function FeaturePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold bg-gradient-to-tl from-blue-500 to-indigo-500 bg-clip-text text-transparent">Unmatched Performance</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Redefine Your Audio Experience
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            The Realme Wireless 3 Neckband brings cutting-edge features and superior sound quality to enhance your
            everyday life. Perfect for music lovers, gamers, and professionals alike.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}


