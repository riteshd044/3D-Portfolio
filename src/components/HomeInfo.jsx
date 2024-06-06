import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons/'

const InfoBox = ({text,subtext,link,btnText})=>(
    <div className='info-box'>
        <p className=' font-medium sm:text-xl text-center'>{text}<br/>{subtext}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'></img>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-5 text-white mx-5 '>
            🚀 Hi! I'm <span className='font-semibold'>Ritesh Das </span>🚀
            <br/>
            Your Code Craftsman! 💻✨
            <br/>
            A Software Engineer from India 🇮🇳
        </h1>
    ),
    2 : (
        <InfoBox
          text="Passionate about turning ideas into elegant software."
          subtext=" Let's build something amazing! 🔧 #CodeCrafting ✨ "
          link="/about"
          btnText="Learn more"
        />
    ),
    3 : (
        <InfoBox
          text="Led multiple projects to success over the years."
          subtext=" Curious about the impact? "
          link="/projects"
          btnText="Vist my portfolio"
        />
    ),
    4 : (
        <InfoBox
          text="Need a project done or looking for a dev?"
          subtext="I'm just a few keystrokes away"
          link="/contact"
          btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return (
    <div>{renderContent[currentStage]}</div>
  )
}

export default HomeInfo