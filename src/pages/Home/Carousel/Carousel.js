import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className='py-2'>
            <section
  className="relative bg-[url(https://media.istockphoto.com/id/1186198866/photo/cooking-by-a-chef-italian-lasagna-frying-a-dressing-in-a-frying-pan-and-sprinkling-with-basil.jpg?b=1&s=170667a&w=0&k=20&c=4IASrUZcRc0sHrHhBM0VrTKycMbbqO1JFdKqNBcBOYY=)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-rose-700">
          Favorite Food.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Cooking is my passion. In my leisure time I love to cook my favorite items.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to="/services"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>

        <Link
          to="blog"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Carousel;