import authorImage from 'assets/images/Noayn_Dey.jpg';

export default function Hero() {
  return (
    <section className="flex justify-center mt-4">
      <div>
        {/* image */}
        <div>
          <div className="bg-cyan-200 rounded-full p-2">
            <img src={authorImage} alt="author" className="h-32 rounded-full" loading="lazy" />
          </div>
        </div>
        {/* designation */}
        <div>

        </div>
        {/* objective */}
        <div>

        </div>
        {/* links */}
        <div>

        </div>
      </div>
    </section>
  )
}