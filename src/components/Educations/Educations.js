import React from 'react';
import Education from '../Education/Education';
import './Educations.css';

export default class Educations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          time: 1990,
          title: 'I was born in Katowice',
          description:
            'Lorem ipsum dolor sit amet,consectetur adipisicing elit.Sapiente, exercitationem,totam,dolores iste dolore est aut modi.',
        },
        {
          time: 2005,
          title: 'Secondary school specializing in artistic',
          description:
            'Eos,explicabo,nam,tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          time: 2009,
          title: 'First level graduation in Graphic Design',
          description:
            'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores underepellat.',
        },
        {
          time: 2012,
          title: 'Second level graduation in Graphic Design',
          description: 'Ducimus, aliquam tempore autem itaque et accusantium!',
        },
      ],
    };
  }
  render() {
    return this.state.educations.map((education) => (
      <Education
        time={education.time}
        title={education.title}
        description={education.description}
        key={education.time}
      />
    ));
  }
}
