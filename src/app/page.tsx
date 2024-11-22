import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

<section className="flex flex-col container mx-auto bg-[#F4F6F5] rounded-[59px] pt-16 px-10 md:items-center md:px-20 md:pt-[68px] md:flex-row md:justify-between gap-10 z-30">
  <div className="flex flex-col items-start text-black md:pb-[68px] z-10">
    <h1 className="text-4xl font-black leading-[125%] sm:text-5xl md:text-[96px] md:leading-[125%] relative">
      <span className="relative after:w-[120%] after:h-full after:bg-white after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">LET’S</span> <br /> EXPLORE <br />
      <span className="relative after:w-[120%] after:h-full after:bg-yellow-300 after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">UNIQUE</span> <br /> CLOTHES.
    </h1>
    <p className="md:text-[32px]">Live for Influential and Innovative fashion!</p>
    <div className="flex flex-col md:flex-row md:items-center justify-evenly gap-9 pt-8">
      <div className="w-1/2 h-1/2">
        <Image src="/images/banner-image-2.png" alt="banner image" layout="responsive" width={100} height={100} />
      </div>
      <Link href="#">
        <p className="bg-black text-white rounded-md py-4 px-4 text-center">Shop Now</p>
      </Link>
    </div>
  </div>
  <div>
    <Image className="w-full" src="/images/banner-image.png" alt="banner image" layout="responsive" width={500} height={500} />
  </div>
</section>


<section className="flex flex-col justify-center items-center gap-[121px] my-16 bg-primary py-[61px] md:flex-row">
  <div className="w-[118px]"><Image src="/images/brands/hm.png" alt="H&M" width={118} height={118} /></div>
  <div className="w-[150px]"><Image src="/images/brands/obey.png" alt="Obey" width={150} height={150} /></div>
  <div className="w-[176px]"><Image src="/images/brands/shopify.png" alt="Shopify" width={176} height={176} /></div>
  <div className="w-[150px]"><Image src="/images/brands/lacoste.png" alt="Lacoste" width={150} height={150} /></div>
  <div className="w-[127px]"><Image src="/images/brands/levis.png" alt="Levis" width={127} height={127} /></div>
  <div className="w-[166px]"><Image src="/images/brands/amazon.png" alt="Amazon" width={166} height={166} /></div>
</section>

<section className="flex flex-col container items-start gap-28 mx-auto px-[10px]">
  <div className="relative text-black">
    <h2 className="text-4xl font-black after:content-oval after:absolute after:left-[50%] after:-bottom-2.5 after:-z-10 md:text-5xl">NEW ARRIVALS</h2>
  </div>
  <div className="grid grid-flow-row grid-row-1 gap-24 md:grid-flow-col md:grid-cols-3">
    {/* Card 1 */}
    <div className="flex flex-col w-full gap-7">
      <Image className="w-full h-[704px] object-cover object-[75%] rounded-[20px]" src="/images/hoddiee.png" alt="Hoodies & Sweatshirt" width={500} height={704} />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-[32px] font-medium">Hoodies & Sweatshirt</h3>
          <Link href="#">
            <p className="text-2xl text-[#7F7F7F]">Explore Now!</p>
          </Link>
        </div>
        <div>
          <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col w-full gap-7">
      <Image className="w-full h-[704px] object-cover object-[34%] rounded-[20px]" src="/images/coats.png" alt="Coats & Parkas" width={500} height={704} />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-[32px] font-medium">Coats & Parkas</h3>
          <Link href="#">
            <p className="text-2xl text-[#7F7F7F]">Explore Now!</p>
          </Link>
        </div>
        <div>
          <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="flex flex-col w-full gap-7">
      <Image className="w-full h-[704px] object-cover object-[47%] rounded-[20px]" src="/images/T-shirts.png" alt="Tees & T-Shirt" width={500} height={704} />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-[32px] font-medium">Tees & T-Shirt</h3>
          <Link href="#">
            <p className="text-2xl text-[#7F7F7F]">Explore Now!</p>
          </Link>
        </div>
        <div>
          <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
        </div>
      </div>
    </div>
  </div>
</section>



<section className="flex flex-col container items-start my-[190px] gap-28 mx-auto">
  <div className="relative text-black">
    <h2 className="text-4xl font-black after:content-oval after:absolute after:left-[50%] after:-bottom-2.5 after:-z-10 md:text-5xl">Young’s Favourite</h2>
  </div>
  <div className="grid grid-flow-row grid-row-1 gap-12 md:grid-flow-col md:grid-cols-2">
    {/* Card 1 */}
    <div className="flex flex-col gap-7">
      <div>
        <Image className="w-full h-[704px] object-cover object-[25%] rounded-[20px]" src="/images/fav-1.png" alt="Favourite 1" width={500} height={704} />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-[32px] font-medium">Trending on Instagram</h3>
          <Link href="#">
            <p className="text-2xl text-[#7F7F7F]">Explore Now!</p>
          </Link>
        </div>
        <div>
          <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col gap-7">
      <div className="h-[704px]">
        <Image className="w-full h-[704px] object-cover object-[34%] rounded-[20px]" src="/images/fav-2.png" alt="Favourite 2" width={500} height={704} />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-[32px] font-medium">All Under $40</h3>
          <Link href="#">
            <p className="text-2xl text-[#7F7F7F]">Explore Now!</p>
          </Link>
        </div>
        <div>
          <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="container mx-auto flex flex-col my-[190px] gap-28 md:flex-row md:justify-evenly md:items-center">
  <div className="flex-1 flex flex-col items-center text-center md:items-start">
    <h4 className="text-4xl md:text-5xl font-black tracking-[3px] leading-[130%] md:leading-[150%] mb-10">
      DOWNLOAD APP & <br /> GET THE VOUCHER!
    </h4>
    <p className="text-2xl font-medium leading-9 text-[#7C7C7C]">
      Get 30% off for first transaction using <br /> Rondovision mobile app for now.
    </p>
    <div className="flex flex-col md:flex-row gap-5 mt-16">
      <Image className="w-[204px]" src="/images/apple-store.png" alt="Apple Store" width={204} height={60} />
      <Image className="w-[204px]" src="/images/play-store.png" alt="Play Store" width={204} height={60} />
    </div>
  </div>
  <div className="flex-1">
    <Image src="/images/mobile-app.png" alt="Mobile App" width={500} height={500} />
  </div>
</section>

<section className="flex flex-col items-center py-36 bg-yellow-300">
  <h4 className="text-3xl font-black text-white text-center tracking-[1.7px] mb-8 md:leading-[70px] md:text-[55px]">
    JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
  </h4>
  <p className="text-xl text-center text-white font-normal md:leading-9 tracking-[1px] md:text-[32px]">
    Type your email down below and be young wild generation
  </p>
  <form className="mt-12">
    <div className="bg-white rounded-[10px] flex flex-row items-center">
      <input
        className="px-4 py-5 rounded-[10px] focus-visible:outline-0 md:py-6 md:px-7"
        type="email"
        name="email"
        placeholder="type your email here"
      />
      <button
        className="py-2 px-4 bg-black text-white uppercase md:text-[33px] md:py-[5px] md:px-[20px] rounded-lg mr-2"
        type="submit"
      >
        send
      </button>
    </div>
  </form>
</section>


<footer className="bg-black py-[125px] text-white flex flex-col gap-24 px-14 md:items-center md:gap-[415px] md:flex-row md:justify-between md:px-[100px]">
  <div className="flex flex-col items-start gap-8">
    <div>
      <Image src="/images/FASHION.png" alt="Fashion Logo" width={150} height={50} />
    </div>
    <div>
      <p className="text-xl text-[#8E8E8E] md:text-2xl font-normal">
        Complete your style with awesome <br /> clothes from us.
      </p>
    </div>
    <ul className="flex flex-row gap-[14px]">
      <li>
        <Image src="/images/fb.svg" alt="Facebook" width={24} height={24} />
      </li>
      <li>
        <Image src="/images/insta.svg" alt="Instagram" width={24} height={24} />
      </li>
      <li>
        <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
      </li>
      <li>
        <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
      </li>
    </ul>
  </div>
  <div className="flex flex-col gap-[50px] md:gap-[188px] md:flex-row">
    <div className="flex flex-col text-[#D9D9D9] gap-8">
      <h4 className="font-bold">Company</h4>
      <ul className="flex flex-col gap-8">
        <li>About us</li>
        <li>Contact us</li>
        <li>Support</li>
        <li>Careers</li>
      </ul>
    </div>
    <div className="flex flex-col text-[#D9D9D9] gap-8">
      <h4 className="font-bold">Quick Link</h4>
      <ul className="flex flex-col gap-8">
        <li>Share Location</li>
        <li>Orders Tracking</li>
        <li>Size Guide</li>
        <li>FAQs</li>
      </ul>
    </div>
    <div className="flex flex-col text-[#D9D9D9] gap-8">
      <h4 className="font-bold">Legal</h4>
      <ul className="flex flex-col gap-8">
        <li>Terms & conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  </div>
</footer>



    </div>
  );
}
