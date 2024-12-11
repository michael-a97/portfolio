import * as React from "react";

const Experience = () => {
  return (
    <>
      <div className="bg-gray-200 pt-8">
        <h1
          id="experience"
          className="font-extrabold text-4xl lg:mx-[10vw] px-8 mt-8"
        >
          Experience
        </h1>
        <a href="https://dukka.com" target="_blank">
          <div className="p-8 lg:mx-[10vw] grid grid-cols-6 hover:bg-primary hover:bg-opacity-30 border-2 border-transparent hover:border-primaryDark hover:border-2 rounded-xl my-8 transition-all duration-300 group">
            <h3 className="text-gray-600 text-lg">2022 - Present</h3>
            <div className="col-span-5">
              <h1 className="font-extrabold text-2xl flex justify-between">
                Mobile Engineer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4  ml-2 opacity-0 group-hover:opacity-100"
                >
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                </svg>
              </h1>
              <h2 className="text-gray-600">Dukka Ltd</h2>
              <ul className="list-disc ml-8">
                <li className="mb-2">
                  Spearheaded and worked on a personal finance application
                  called Dash for android and iOS, and a smart bookkeeping
                  application called Dukka built with flutter for android, iOS
                  and a smart POS device respectively.
                </li>
                <li className="mb-2">
                  Lead the version 2 rewrite of Dukka, bootstrapped Flutter
                  projects, and setup the CI/CD with Codemagic and Github
                  actions for automated testing,building, and deploying.
                </li>
                <li className="mb-2">
                  Wrote clean, testable, and maintainable code using clean
                  architecture and test-driven development
                </li>
                <li>
                  Managed releases and prepared timely builds using github,
                  codemagic, and testflight for QA & internal testing And
                  submitted new releases to the Google Play Store and Apple App
                  Store
                </li>
              </ul>
              <div className="flex flex-row py-4 flex-wrap gap-1 ">
                <ExperienceChip>Flutter</ExperienceChip>
                <ExperienceChip>BLoC</ExperienceChip>
                <ExperienceChip>get_it</ExperienceChip>
                <ExperienceChip>injectable</ExperienceChip>
                <ExperienceChip>Dio</ExperienceChip>
                <ExperienceChip>Drift</ExperienceChip>
                <ExperienceChip>Firebase </ExperienceChip>
                <ExperienceChip>Firebase cloud messaging </ExperienceChip>
                <ExperienceChip>Firebase analytics </ExperienceChip>
                <ExperienceChip>Github actions</ExperienceChip>
                <ExperienceChip>CodeMagic</ExperienceChip>
                <ExperienceChip>Postman</ExperienceChip>
                <ExperienceChip>Jira</ExperienceChip>
                <ExperienceChip>Confluence</ExperienceChip>
                <ExperienceChip>Test driven development</ExperienceChip>
                <ExperienceChip>Unit testing</ExperienceChip>
                <ExperienceChip>Widget testing</ExperienceChip>
              </div>
            </div>
          </div>
        </a>
        <a href="https://l-ift.com" target="_blank">
          <div className="p-8 lg:mx-[10vw] grid grid-cols-6 hover:bg-primary hover:bg-opacity-30 border-2 border-transparent hover:border-primaryDark hover:border-2 rounded-xl my-8 transition-all duration-300 group">
            <h3 className="text-gray-600 text-lg">2020 - 2022</h3>
            <div className="col-span-5">
              <h1 className="font-extrabold text-2xl flex justify-between">
                Android developer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4  ml-2 opacity-0 group-hover:opacity-100"
                >
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                </svg>
              </h1>
              <h2 className="text-gray-600">
                L-IFT (Low income financial transformation)
              </h2>
              <ul className="list-disc ml-8">
                <li className="mb-2">
                  Developed a native Android financial research app called
                  Finbit targeted at conducting financial research in low-income
                  areas.
                </li>
                <li className="mb-2">
                  Maintained offline first features using Sugar ORM for
                  interacting with a local database.
                </li>
                <li className="mb-2">
                  Implemented background services for syncing data with the
                  server when the device is back online.
                </li>
                <li>Redesigned and implemented new UI for the app</li>
                <li> Implemented UI tests wil espresso</li>
                <li>
                  Integrated and monitored crash reports on crashlytics and
                  tracked error reports on the Google play console
                </li>
              </ul>
              <div className="flex flex-row py-4 flex-wrap gap-1 ">
                <ExperienceChip>Java</ExperienceChip>
                <ExperienceChip>Android</ExperienceChip>
                <ExperienceChip>Sugar ORM</ExperienceChip>
                <ExperienceChip>Retrofit</ExperienceChip>
                <ExperienceChip>Firebase crashlytics</ExperienceChip>
                <ExperienceChip>Espresso</ExperienceChip>
                <ExperienceChip>Gitlab</ExperienceChip>
              </div>
            </div>
          </div>
        </a>

        <a href="https://negarit.net" target="_blank">
          <div className="p-8 lg:mx-[10vw] grid grid-cols-6 hover:bg-primary hover:bg-opacity-30 border-2 border-transparent hover:border-primaryDark hover:border-2 rounded-xl my-8 transition-all duration-300 group">
            <h3 className="text-gray-600 text-lg">2019 - 2020</h3>
            <div className="col-span-5">
              <h1 className="font-extrabold text-2xl flex justify-between">
                Part time software developer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4  ml-2 opacity-0 group-hover:opacity-100"
                >
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                </svg>
              </h1>
              <h2 className="text-gray-600">Agelgel technologies</h2>
              <ul className="list-disc ml-8">
                <li className="mb-2">
                  Implemented SMS sending and airtime transfer features for an
                  in-house system with a Node js, Express Js and MySQL backend
                  and an Android application frontend with android Jetpack
                  components
                </li>
                <li className="mb-2">
                  Implemented real-time communication between the Android
                  application and the Backend server using Socket.io for and
                  internal system
                </li>
                <li className="mb-2">
                  Designed and implemented Android application user interfaces,
                  local databases, and services, & handled integration to
                  backend REST APIs
                </li>
              </ul>
              <div className="flex flex-row py-4 flex-wrap gap-1 ">
                <ExperienceChip>Kotlin</ExperienceChip>
                <ExperienceChip>Android</ExperienceChip>
                <ExperienceChip>Room</ExperienceChip>
                <ExperienceChip>LiveData</ExperienceChip>
                <ExperienceChip>Node js</ExperienceChip>
                <ExperienceChip>Express js</ExperienceChip>
                <ExperienceChip>Sequelize</ExperienceChip>
                <ExperienceChip>MySQL</ExperienceChip>
                <ExperienceChip>Socket.io</ExperienceChip>
                <ExperienceChip>Bitbucket</ExperienceChip>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const ExperienceChip = ({ children }) => {
  return (
    <div
      className="bg-primary bg-opacity-20 border-2
     border-opacity-45  border-primaryDark
      text-primaryDark group-hover:text-black group-hover:bg-gray-200 rounded-full
       px-4 py-1 font-medium "
    >
      {children}
    </div>
  );
};

export default Experience;
