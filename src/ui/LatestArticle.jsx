import currency from "../assets/image-currency.jpg"
import confetti from "../assets/image-confetti.jpg"
import plane from "../assets/image-plane.jpg"
import restaurant from "../assets/image-restaurant.jpg"

const features = [
  {
    image: currency,
    name: "Claire Robinsin ",
    title: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …  "
  },
  {
   image: restaurant,
    name: "Wilson Hutton ",
    title: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. that means you... "
  },
  {
    image: plane,
    name: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … "
  },
  {
    image: confetti,
    name: "Claira Wilson",
    title: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
  }
];

const FeatureCard = ({image,name, title, description }) => (
  <div className="flex flex-col items-center sm:items-start bg-white mb-12 p-5">
    <img 
      src={image} 
      alt={`${name} img`} 
      className=" mb-8"
    />
    <p className="text-sm text-customDarkBlue">By {name}</p>
    <h3 className="text-2xl sm:text-3xl text-customDarkBlue mb-6">
      {title}
    </h3>
    <p className="text-lg text-gray-400 text-center sm:text-left leading-relaxed max-w-md">
      {description}
    </p>
  </div>
);

const LatestArticle = () => {
  return (
    <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto">

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            image={feature.image}
            name={feature.name}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
export default LatestArticle
