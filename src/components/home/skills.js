import * as React from "react";

const Skills = () => {
  return (
    <div className="p-8">
      <h1 className="h1">Skills</h1>
      <div className="p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SkillListItem skill="Flutter" />
        <SkillListItem skill="Android" />
        <SkillListItem skill="BLoC" />
        <SkillListItem skill="Drift" />
        <SkillListItem skill="Firebase" />
        <SkillListItem skill="REST APIs" />
      </div>
    </div>
  );
};

const SkillListItem = ({ skill }) => {
  return <p>{skill}</p>;
};

export default Skills;
