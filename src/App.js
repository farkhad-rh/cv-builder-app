import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import styled from 'styled-components'

import { Header, Footer, Avatar, Range, Title, Descr } from './components'

import { ReactComponent as MailIcon } from './assets/icons/mail.svg'
import { ReactComponent as PhoneIcon } from './assets/icons/phone.svg'

const Wrapper = styled.div`
  max-width: 1200px;
  background-color: #fff;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 32%), 0px 12px 24px rgb(0 0 0 / 15%);
  border-radius: 14px;
  margin: 2rem auto;
  padding: 1rem 2rem;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

const App = () => {
  const [skillsCounter, setSkillsCounter] = useState(1)
  const [worksCounter, setWorksCounter] = useState(1)

  const componentRef = useRef()

  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className='ui-wrapper'>
      <Header onClick={handlePrintClick} />

      <div className='ui-content-wrapper'>
        <Wrapper>
          <div className='ui-container' ref={componentRef}>
            <Row itemsCenter>
              <Sidebar>
                <Avatar />
              </Sidebar>

              <Content>
                <Title>Farkhad Rizvanov</Title>

                <Descr>
                  Frontend Developer & Web Developer & Application Engineer
                </Descr>
              </Content>
            </Row>

            <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me:
                </Title>

                <Descr>Frontend Developer</Descr>

                <Descr isSecondary>Uzbekistan, Tashkent</Descr>

                <Descr isPrimary style={{ marginTop: '2rem' }}>
                  <MailIcon style={{ marginRight: '0.6rem' }} />
                  space.devs@yahoo.com
                </Descr>

                <Descr isPrimary>
                  <PhoneIcon style={{ marginRight: '0.6rem' }} />
                  +7 (960) 514-08-18
                </Descr>

                <Descr isPrimary>
                  <PhoneIcon style={{ marginRight: '0.6rem' }} />
                  +998 (33) 881-08-18
                </Descr>
              </Sidebar>

              <Content>
                <Title size='3' isUppercase>
                  Education:
                </Title>

                <Descr>Moscow Financial and Industrial University 'Synergy' - Economy, Finance and Credit</Descr>

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setWorksCounter(worksCounter + 1)}
                  style={{ marginTop: '3.6rem' }}
                >
                  Work experience:
                </Title>

                {new Array(worksCounter).fill(1).map((_, i) => (
                  <Descr key={i}>{i + 1}. Senior Frontend Developer, Atmos.</Descr>
                ))}

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setSkillsCounter(skillsCounter + 1)}
                  style={{ marginTop: '3rem' }}
                >
                  Skills:
                </Title>

                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range key={i} />
                ))}
              </Content>
            </Row>
          </div>
        </Wrapper>
      </div>

      <Footer />
    </div>
  )
}

export default App
