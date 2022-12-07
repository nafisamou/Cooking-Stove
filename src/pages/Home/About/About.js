import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const About = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl  tracking-tight text-center sm:text-5xl services-h">
              My Special Items
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-400 font-sans">
              The art of cooking is a popular one, and foodie culture has gotten
              a huge boost from the Internet and the proliferation of food
              websites and magazines.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Chicken Fry
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                Years ago, when I started making this chicken fry recipe, I was
                confident that this was going to be a huge hit. And, guess what?
                It is a hero dish at our table till date and will be the hero
                forever.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Southern fried chicken
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Southern fried chicken is a signature of the United
                      States. Brined in buttermilk, the chicken tenderizes
                      before being coated in seasoned flour, then fried crisp
                      and golden brown.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Nashville hot chicken
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Fried chicken remains a celebrated dish in communities
                      across America that comforts and brings people together.
                      Whether packed in a greasy takeout box, piled high on a
                      tray at a family reunion, or lovingly made at home for a
                      weekend dinner, Southern fried chicken is an icon of
                      American cooking.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Korean Fried Chicken
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Chicken karaage, or Japanese fried chicken, uses skin-on
                      chicken thighs marinated in ginger, garlic, soy sauce, and
                      sake. The thighs are then dredged in potato starch and
                      deep fried, creating a crispy, golden brown outer coating
                      similar to tempura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <PhotoProvider>
                <PhotoView src="https://www.layersofhappiness.com/wp-content/uploads/2016/04/homemade-cheddar-chicken-fingers-4.jpg">
                  <img
                    src="https://www.layersofhappiness.com/wp-content/uploads/2016/04/homemade-cheddar-chicken-fingers-4.jpg"
                    alt=""
                    className="block mx-auto  object-center shadow-lg  rounded-lg  cursor: zoom-in object-cover aspect-square bg-gray-500 w-[400px] h-[500px] "
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  Chicken shawarma
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  Shawarma is vastly popular across the middle-east, specially
                  Lebanon. Now, a popular street food as well, chicken shawarma
                  has quickly garnered appreciation across the globe,
                  particularly in India. You can prepare this easy shawarma at
                  home as a side dish for brunch or for evening snacks.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Vegan Mushroom Shawarma
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Traditional chicken shawarma is basically well-marinated
                        chicken, layered on a vertical rotisserie or spit where
                        it's slow-roasted for days--in its own juices and
                        fat--until perfectly tender and extra flavorful!
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Chicken Shawarma Wraps
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        This is one of my signature recipes that will be very
                        familiar to all my friends because I make this so often.
                        It’s off the charts for effort vs output: just a handful
                        of everyday spices, garlic, a splash of lemon and olive
                        oil transforms into the most incredible flavour.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Oven Roasted Chicken Shawarma
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        When this chicken is cooking, the smell is incredible.
                        In fact, it’s how I met most of my neighbours when I
                        lived in a townhouse complex, random people I had never
                        met before popping their head over the fence wanting to
                        know what on earth I was making. They were elated when I
                        handed out samples!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <PhotoProvider>
                  <PhotoView src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma-750x750.jpg">
                    <img
                      src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma-750x750.jpg"
                      alt=""
                      className="block mx-auto  object-center shadow-lg  rounded-lg  cursor: zoom-in object-cover aspect-square bg-gray-500  h-[534px] w-[431px] "
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
