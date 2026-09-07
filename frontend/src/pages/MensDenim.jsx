import denimJacket from '../assets/p_img46.png'

const sections = [
  {
    number: '1.',
    title: 'KEEP IT EASY: LAID-BACK WEEKEND VIBES',
    text: "Cracking a cold one open with the boys? Spending a low-key day around town? Or just lounging at home? Whatever it is, we can tell you want to keep your look casual with a hint of effortless style. And nothing achieves this better than pairing your Loom Heritage denim jacket with a classic t-shirt. A simple, well-fitted tee tucked in gives you a clean, sleek aesthetic, while an untucked graphic tee offers a more relaxed vibe. Opt for an easygoing look and finish off your casual fit with your favorite sneakers.",
    tip: "Cuffing the sleeves of your Loom Heritage denim jacket can take your look from laidback to sharp in seconds.",
  },
  {
    number: '2.',
    title: 'STREET-READY LAYERING: THE HOODIE COMBINATION',
    text: "Heading out on a chilly evening or taking your look outdoors? Layering is where Loom Heritage denim truly shines. Throw your jacket over a lightweight pullover hoodie or a soft crewneck sweatshirt. Pull the hood out over the collar to give your fit textured dimension and street-smart structure. Pair this with relaxed black jeans or utility cargo pants, and round it out with high-top sneakers or leather boots.",
    tip: "Keep your Loom Heritage denim jacket unbuttoned over hoodies to maintain a clean, comfortable, and well-proportioned silhouette.",
  },
  {
    number: '3.',
    title: 'DOUBLE DENIM DONE RIGHT',
    text: "Ready to stand out with a bold, retro-inspired aesthetic? Double denim is back in a big way, and Loom Heritage denim pieces are designed to contrast effortlessly. Pair a mid-wash or light-wash Loom Heritage denim jacket with darker indigo or black jeans to create a clean visual balance. Wear a simple white or dark crewneck tee underneath to keep the center smooth. Complete the fit with leather Chelsea boots or sleek white leather sneakers.",
    tip: 'Ensure your jacket and jeans have distinct shade differences: mixing a lighter jacket with dark denim on the bottom is the easiest way to master the look.',
  },
  {
    number: '4.',
    title: 'ELEVATED NIGHT OUT: GO ALL OUT FOR THE NIGHT',
    text: "Taking your Loom Heritage jacket from day to night? Taking your denim jacket from day to night is as hassle-free as can be. Start by picking a darker wash Loom Heritage denim jacket, as dark shades are easier to create a sophisticated look with. Next, pair it with a crisp button-down Oxford shirt or a fitted polo, along with sleek dress shoes or leather boots. For a polished night out, tuck in the shirt, add a leather belt, and you are ready for the night, whether it is a night out with your friends or a big date.",
    tip: 'A dark-wash Loom Heritage denim jacket will elevate this aesthetic like no other, so throw it on if it matches the weather.',
  },
]

const sectionImage = (section, index) => (
  <div className={`flex min-h-[270px] items-center justify-center bg-gray-50 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
    <img src={denimJacket} alt={`${section.title} denim jacket look`} className='h-full max-h-[360px] w-full object-cover object-top' />
  </div>
)

const MensDenim = () => {
  return (
    <main className='border-t pb-20 pt-6 sm:pt-8'>
      <div className='relative h-[220px] overflow-hidden sm:h-[280px]'>
        <img src={denimJacket} alt='Man wearing a classic denim jacket' className='h-full w-full object-cover object-top' />
        <h1 className='absolute inset-0 flex items-center justify-center px-4 text-center text-xl font-medium text-white drop-shadow-md sm:text-3xl'>
          DENIM DONE RIGHT: STYLING YOUR LOOM HERITAGE DENIM JACKET FOR HIM
        </h1>
      </div>

      <div className='mx-auto max-w-5xl'>
        <h2 className='mt-7 text-base font-semibold sm:text-lg'>DENIM DONE RIGHT: STYLING YOUR LOOM HERITAGE DENIM JACKET FOR HIM</h2>
        <p className='mt-4 text-[11px] leading-5 text-gray-600 sm:text-xs'>When you think of iconic wardrobe essentials, more often than not you think of a timeless classic: the denim jacket. A staple in men&apos;s style for generations, the classic trucker jacket remains an unmatched wardrobe essential. At Loom Heritage, our denim jackets are crafted to deliver that exact balance of timeless comfort, premium durability, and rugged style. The secret? Unmatched versatility. A Loom Heritage denim jacket is the one piece you can blindly throw on with pretty much anything and know you will look good wherever you are headed, whether it is catching a game at your local hangout or heading out for a fancy date.</p>
        <p className='mt-4 text-[11px] leading-5 text-gray-600 sm:text-xs'>And since the looks you can create with a Loom Heritage jacket are virtually endless, we have curated tips from our stylists on how you can level up your denim game.</p>

        <div className='mt-7 space-y-10 sm:mt-8 sm:space-y-14'>
          {sections.map((section, index) => (
            <article key={section.number} className='grid items-center gap-8 md:grid-cols-2 md:gap-12'>
              {sectionImage(section, index)}
              <div className={index % 2 === 0 ? 'md:order-last' : 'md:order-first'}>
                <h3 className='text-xs font-semibold sm:text-sm'>{section.number} {section.title}</h3>
                <p className='mt-2 text-[11px] leading-5 text-gray-600 sm:text-xs'>{section.text}</p>
                <p className='mt-5 text-[11px] leading-5 text-gray-600 sm:text-xs'><span className='font-medium text-gray-800'>Pro Tip:</span> {section.tip}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default MensDenim
