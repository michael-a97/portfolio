import * as React from "react";

const Skills = () => {
  return (
    <div className="p-8 min-h-[40vh]" id="skills">
      <h1 className="font-extrabold text-4xl">Skills</h1>
      <h1 className="font-medium text-2xl  text-gray-500 mt-8 border-b-2">
        Languages
      </h1>
      <SkillsGrid>
        <SkillListItem skill="Dart" />
        <SkillListItem skill="Java" />
        <SkillListItem skill="Kotlin" />
        <SkillListItem skill="JavaScript" />
        <SkillListItem skill="Python" />
        <SkillListItem skill="C" />
        <SkillListItem skill="Go" />
      </SkillsGrid>

      <h1 className="font-medium text-2xl  text-gray-500 mt-16 border-b-2">
        Frameworks
      </h1>

      <SkillsGrid>
        {/* Technologies */}
        <SkillListItem skill="Flutter" />
        <SkillListItem skill="Android" />
        <SkillListItem skill="Node.js" />
        <SkillListItem skill="Express.js" />
        <SkillListItem skill="MySQL" />
        <SkillListItem skill="Mongo DB" />
        <SkillListItem skill="REST APIs" />
      </SkillsGrid>
      <h1 className="font-medium text-2xl  text-gray-500 mt-16 border-b-2">
        Industry skills
      </h1>

      <SkillsGrid>
        {/* Tools */}
        <SkillListItem skill="Test driven development (TDD)" />
        <SkillListItem skill="Agile software development" />
        <SkillListItem skill="Functional programming" />
        <SkillListItem skill="BLoC" />
        <SkillListItem skill="App publishing and release management" />
        <SkillListItem skill="Firebase" />
        <SkillListItem skill="CodeMagic (CI/CD)" />
        <SkillListItem skill="Github Actions" />
        <SkillListItem skill="Code reviews" />
      </SkillsGrid>

      <h1 className="font-medium text-2xl  text-gray-500 mt-16 border-b-2">
        Tools
      </h1>
      <SkillsGrid>
        <SkillListItem skill="Adobe XD" />
        <SkillListItem skill="Figma" />
        <SkillListItem skill="Adobe Illustrator" />
        <SkillListItem skill="Adobe Photoshop" />
        <SkillListItem skill="Blender" />
        <SkillListItem skill="Adobe after effects" />
        <SkillListItem skill="Rive" />
      </SkillsGrid>
    </div>
  );
};

const SkillsGrid = ({ children }) => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
      {children}
    </div>
  );
};

const SkillListItem = ({ skill }) => {
  return (
    <p className="rounded-lg border-gray-100 bg-gray-50 border-2 px-4 py-4 text-gray-500 border-l-primary border-l-4 rounded-l-none">
      {skill}
    </p>
  );
};

export default Skills;
