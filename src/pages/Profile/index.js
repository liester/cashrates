import React, {useMemo} from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import providers from '../../content/providers.json'
import * as S from './styles'
import profileImages from "../../content/profile-images.json";
import Button from "../../common/Button";

const specialties = ['Specialties', 'Anxiety', 'Trauma and PTSD', 'Depression']

const issues = ['Adoption', 'Anger Management', 'Behavioral Issues', 'Bipolar Disorder', 'Child or Adolescent', 'Coping Skills', 'Dual Diagnosis', 'Eating Disorders', 'Emotional Disturbance', 'Grief', 'Life Transitions', 'Oppositional Defiance', 'Parenting', 'Relationship Issues', 'Self Esteem', 'Stress']

const qualifications = {
  yearsInPractice: 4,
  license: 'Nebraska / 2400',
  school: 'Bellevue University',
  yearGraduated: '2016',
}

const communities = ['Bisexual Allied', 'Body Positivity', 'Gay Allied', 'Non-Binary Allied', 'Queer Allied', 'Transgender Allied']

const clientAges = ['Adults', 'Adolescents / Teenagers (14 to 19)', 'Preteens / Tweens (11 to 13)', 'Children (6 to 10)']

const typesOfTherapy = ['Acceptance and Commitment (ACT)', 'Attachment-based', 'Cognitive Behavioral (CBT)', 'Culturally Sensitive', 'Dialectical (DBT)', 'EMDR', 'Eclectic', 'Existential', 'Family / Marital', 'Family Systems', 'Humanistic', 'Integrative', 'Internal Family Systems (IFS)', 'Jungian', 'Mindfulness-Based (MBCT)', 'Motivational Interviewing', 'Multicultural', 'Narrative', 'Parent-Child Interaction (PCIT)', 'Person-Centered', 'Positive Psychology', 'Rational Emotive Behavior (REBT)', 'Solution Focused Brief (SFBT)', 'Strength-Based', 'Trauma Focused']

const modalities = ['Individuals', 'Couples', 'Family']

const bio = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

const renderList = (list, title) => {
  return (
    <Container flexDirection={"column"}>
      <div style={{fontSize: "20px"}}>{title.toUpperCase()}</div>
      {list.map(item => <div>{item}</div>)}
    </Container>
  )
}

const Profile = (props) => {
  const {profileId} = props.match.params
  const provider = useMemo(() => {
    for (let i = 0; i < providers.length; i++) {
      if (providers[i].id.toString() === profileId) {
        return providers[i]
      }
    }
  }, [profileId])
  return (
    <Container flexDirection={"column"}>
      <ScrollToTop/>
      <Container>
        <Container flexDirection={"column"} style={{width: "400px"}}>
          <S.ProfileImage src={profileImages[provider.id]}/>
          <Container style={{fontSize: '30px', paddingLeft: '5px'}}>{provider.first_name} {provider.last_name}</Container>
          <Button>Send Email</Button>
          <Container flexDirection={"column"}>
            <div style={{fontSize: "20px"}}>QUALIFICATIONS</div>
            <div>{`Years in Practice: ${qualifications.yearsInPractice}`}</div>
            <div>{`License: ${qualifications.license}`}</div>
            <div>{`School: ${qualifications.school}`}</div>
            <div>{`Graduation Year: ${qualifications.yearGraduated}`}</div>
          </Container>
          {renderList(communities, 'Communities')}
          {renderList(clientAges, 'Client Ages')}
          {renderList(modalities, 'Modalities')}
          {renderList(specialties, 'Specialties')}
        </Container>
        <Container flexDirection={"column"} padding>
          <S.BioHeader>About Me</S.BioHeader>
          <S.Bio>{bio}</S.Bio>
        </Container>
        <Container flexDirection={"column"}  style={{width: "400px"}}>
          {renderList(typesOfTherapy, 'Types of Therapy')}
          {renderList(issues, 'Issues')}
        </Container>
      </Container>
      <Container>

      </Container>
    </Container>
  );
};

export default Profile;
