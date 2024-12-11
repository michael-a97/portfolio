import * as React from "react";

const Skills = () => {
  return (
    <div className="p-8 min-h-[80vh] lg:mx-[10vw] mt-12">
      <h1 className="font-extrabold text-4xl">Skills</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        <div>
          <h1 className="font-medium text-2xl   mt-2 ">Languages</h1>
          <ul className="text-gray-600">
            <li>Dart</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Kotlin</li>
            <li>C</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-2xl mt-2 ">Frameworks</h1>
          <ul className="text-gray-600">
            <li>Flutter</li>
            <li>Node</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Gatsby.js</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-2xl mt-2 ">Tools & databases</h1>
          <ul className="text-gray-600">
            <li>Mongo DB</li>
            <li>MySQL</li>
            <li>Git & Github</li>
            <li>CodeMagic</li>
            <li>Mongo DB</li>
            <li>Postman</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-2xl mt-2 ">Graphic design</h1>
          <ul className="text-gray-600">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe After Effects</li>
            <li>Blender</li>
            <li>Mongo DB</li>
            <li>Postman</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// const Skills = () => {
//   return (
//     <div className="p-8 min-h-[40vh]" id="skills">
//       <h1 className="font-extrabold text-4xl text-center">Skills</h1>
//       <h1 className="font-medium text-2xl  text-gray-500 mt-2 text-center">
//         Languages
//       </h1>
//       <SkillsGrid>
//         <SkillListItem skill="Dart" />
//         <SkillListItem skill="Java" />
//         <SkillListItem skill="Kotlin" />
//         <SkillListItem skill="JavaScript" />
//         <SkillListItem skill="Python" />
//         <SkillListItem skill="C" />
//         <SkillListItem skill="Go" />
//       </SkillsGrid>

//       <h1 className="font-medium text-2xl  text-gray-500 mt-12 text-center">
//         Frameworks, libraries, and platforms
//       </h1>

//       <SkillsGrid>
//         {/* Technologies */}
//         <SkillListItem skill="Flutter" />
//         <SkillListItem skill="Android" />
//         <SkillListItem skill="Node.js" />
//         <SkillListItem skill="Express.js" />
//         <SkillListItem skill="MySQL" />
//         <SkillListItem skill="Mongo DB" />
//         <SkillListItem skill="Firebase" />
//         <SkillListItem skill="Firebase messaging" />
//         <SkillListItem skill="Firebase analytics" />
//         <SkillListItem skill="Firebase crashlytics" />
//         <SkillListItem skill="Firebase remote config" />
//       </SkillsGrid>
//       <h1 className="font-medium text-2xl  text-gray-500 mt-12 text-center">
//         Industry skills
//       </h1>

//       <SkillsGrid>
//         <SkillListItem skill="Test driven development (TDD)" />
//         <SkillListItem skill="Agile software development" />
//         <SkillListItem skill="Functional programming" />
//         <SkillListItem skill="REST APIs" />
//         <SkillListItem skill="BLoC" />
//         <SkillListItem skill="App release management" />
//         <SkillListItem skill="Code Magic (CI/CD)" />
//         <SkillListItem skill="Github Actions" />
//         <SkillListItem skill="Code reviews" />
//       </SkillsGrid>

//       <h1 className="font-medium text-2xl  text-gray-500 mt-12 text-center">
//         Tools
//       </h1>
//       <SkillsGrid>
//         <SkillListItem skill="Adobe XD" />
//         <SkillListItem skill="Figma" />
//         <SkillListItem skill="Adobe Illustrator" />
//         <SkillListItem skill="Adobe Photoshop" />
//         <SkillListItem skill="Blender" />
//         <SkillListItem skill="Adobe After Effects" />
//         <SkillListItem skill="Rive" />
//       </SkillsGrid>
//     </div>
//   );
// };

// const SkillsGrid = ({ children }) => {
//   return (
//     <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
//       {children}
//     </div>
//   );
// };

// const SkillListItem = ({ skill }) => {
//   return (
//     <p className="rounded-lg border-gray-100 bg-gray-50 border-2 px-4 py-4 text-gray-500 border-l-primary border-l-4 rounded-l-none overflow-scroll">
//       {skill}
//     </p>
//   );
// };

export default Skills;
