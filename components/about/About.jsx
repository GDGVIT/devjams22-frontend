import styles from './About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className='about'>
      <div className={styles.outer}>
        <div className={styles.text}>
          <h2>About DevJams&rsquo;22</h2>
          <p>
            DevJams is one of a kind hackathon conducted by Google Developer
            Student Clubs VIT every year to encourage tech enthusiasts from
            across the country to develop their ideas for the future. The
            hackathon focuses on providing students and upcoming entrepreneurs
            with a platform to develop, compete, network and present their ideas
            to solve real-world problems. We have been successfully conducting
            DevJams (previously known as Devfest) for 5 years now. DevJams’21
            will be the sixth edition through which we hope to bring innovative
            minds from all around the globe under one banner.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src='/aboutRight.svg'
            layout='fill'
            objectFit='contain'
            alt='imgRight'
          />
        </div>
      </div>

      <div className={styles.outer}>
        <div className={`${styles.img} ${styles.vit}`}>
          <Image
            src='/aboutVit.svg'
            layout='fill'
            objectFit='contain'
            alt='imgRight'
          />
        </div>
        <div className={`${styles.text} ${styles.right}`}>
          <h2>About Vellore Institute of Technology</h2>
          <p>
            Vellore Institute of Technology, Vellore founded in 1984 is one of
            the largest and top-rated engineering colleges in India. It is a
            highly diverse campus with students from all around the globe. Its
            aspiring and dedicated students are the key to its reputation. The
            global standards set at VIT in the field of teaching and research
            spur us on in our relentless pursuit of excellence.
          </p>
        </div>
      </div>
      <div className={styles.gdsc}>
        <h2>About GDSC</h2>
        <p>
          GDSC VIT powered by Google Developers is a student community at VIT,
          Vellore. We strive to bring about technological innovations among
          students and we do so by providing a platform for them to exhibit
          their talents. We are a group of passionate designers, developers, and
          managers who work together to bring about collaborative results that
          better the lives of everyone around us.
        </p>
        <Image
          src='/GDSC.svg'
          layout='responsive'
          width='1100'
          height='300'
          alt='GDSC'
        />
      </div>
    </div>
  )
}

export default About
