import bannerImg from '../../assets/hero.png'

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="pt-10 px-5 sm:px-10 text-center">
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold max-w-md">We Build <span className='text-purple-600'>Productive</span> Apps</h1>
      <p className="text-gray-600 py-6 max-w-250">
        Project IO builds high-quality web, mobile, and software solutions tailored to your needs. We combine clean design, powerful development, and AI-driven features to create smart, scalable products that turn ideas into reality.
      </p>
      <div className='flex gap-4'>
        <button className="btn bg-white hover:shadow-xl rounded-xl hover:scale-105 transition-all duration-300"><img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000" alt="" />Google Play</button>
        <button className="btn bg-white hover:shadow-xl rounded-xl hover:scale-105 transition-all duration-300"><img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=fKXXelWgP1B6&format=png&color=000000" alt="" />App Store</button>
      </div>
      <img className='pt-5 px-10 md:px-16 lg:px-28' src={bannerImg} alt="Banner" />
    </div>
  </div>
</div>
<div className='bg-linear-to-br from-purple-800 to-purple-400 text-white flex flex-col justify-center items-center py-10 md:py-14 lg:py-20'>
        <h1 className='font-semibold lg:font-bold text-3xl md:text-4xl lg:text-5xl'>Trusted By Millions, Built For You</h1>
        <div>
            <div className="stats stats-vertical sm:stats-horizontal shadow">
  <div className="stat border-0">
    <div className="stat-title text-gray-200">Total Downloads</div>
    <div className="stat-value">2.5M</div>
    <div className="stat-desc text-gray-200">5% more than last month</div>
  </div>

  <div className="stat border-0">
    <div className="stat-title text-gray-200">Total Reviews</div>
    <div className="stat-value">500k</div>
    <div className="stat-desc text-gray-200">↗︎ 10k last month (2%)</div>
  </div>

  <div className="stat border-0">
    <div className="stat-title text-gray-200">Active Apps</div>
    <div className="stat-value">40+</div>
    <div className="stat-desc text-gray-200">10 more on the way</div>
  </div>
</div>
        </div>
      </div>
        </div>
    );
};

export default Home;