export default function Footer() {
  return (
    <footer data-scroll data-scroll-speed = "-0.01" className="relative z-10 w-full h-screen bg-[#f1f1f1] px-5 md:px-10 lg:px-16 py-10 md:py-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 border-b border-zinc-300 pb-14">
        
        {/* Left */}
        <div>
          <h1 className="uppercase font-bold leading-none text-[4rem] md:text-[6rem] lg:text-[8rem]">
            Eye- <br /> Opening
          </h1>

          <p className="mt-8 text-zinc-600 text-base md:text-lg max-w-md">
            We create thoughtful presentations that inform, inspire and leave
            a lasting impression.
          </p>
        </div>

        {/* Middle */}
        <div className="space-y-10">
          <div>
            <p className="mb-4 text-sm">S:</p>
            <ul className="space-y-2 underline">
              <li>Instagram</li>
              <li>Behance</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm">L:</p>
            <div className="space-y-6 underline">
              <div>
                <p>202-1965 W 4th Ave</p>
                <p>Vancouver, Canada</p>
              </div>

              <div>
                <p>30 Chukarina St</p>
                <p>Lviv, Ukraine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-10">
          <div>
            <p className="mb-4 text-sm">M:</p>
            <ul className="space-y-2 underline">
              <li>Home</li>
              <li>Services</li>
              <li>Our work</li>
              <li>About us</li>
              <li>Insights</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm">E:</p>
            <p className="underline">hello@ochi.design</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-12 items-start">
        
        {/* Logo */}
        <div>
          <h2 className="text-4xl font-bold">ochi</h2>
          <p className="text-zinc-500 mt-4">
            Designing clarity. <br />
            Delivering impact.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <p className="uppercase tracking-[0.2em] font-semibold text-sm">
            Stay in the loop
          </p>
          <p className="text-zinc-500 mt-3">
            Get insights and updates straight to your inbox.
          </p>

          <div className="mt-5 flex border border-zinc-400 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 outline-none bg-transparent"
            />
            <button className="px-5 text-xl">→</button>
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="uppercase tracking-[0.2em] font-semibold text-sm">
            Follow us
          </p>

          <div className="flex gap-4 mt-5">
            {["IG", "Be", "Fb", "In"].map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full border border-zinc-500 flex items-center justify-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="space-y-4 text-zinc-500">
          <p>© ochi design 2026.</p>
          <p className="underline cursor-pointer">Legal Terms</p>
          <p>
            Website by <span className="underline">Obys</span>
          </p>
        </div>
      </div>
    </footer>
  );
}