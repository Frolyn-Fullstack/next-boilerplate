// Dependencies
import Image from 'next/image'

// Assets
import reactLogo from '../../assets/images/react-logo.png'
import nextLogo from '../../assets/images/next-logo.png'

const Banner = () => {
    return <div className='banner'>
    <div className='logos'>
            <div className='logo'>
  <Image src={reactLogo} alt='' />
</div>
<div className='logo'>
  <Image src={nextLogo} alt='' />
</div>
            </div>
            <h1>Next.js Boilerplate</h1>
            <p className='title'>by Frolyn Raguindin</p>
            <p>
              A simple boilerplate with Server-Side Rendering via Next.js.
            </p>
    </div>
}

export default Banner