import Image from 'next/image'
import Button from '../core/button/Button'

const Register = () => {
  return (
    <div className='lightbg register'>
      <div data-aos='fade-right' data-aos-delay='600'>
        <h2>Haven&rsquo;t Registered yet?</h2>
        <h3>What are you waiting for?</h3>
        <Button />
      </div>
      <Image src='/registerDev.svg' height='400' width='400' alt='DevJams' />
    </div>
  )
}

export default Register
