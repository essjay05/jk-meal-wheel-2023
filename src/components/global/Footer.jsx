import './Footer.css'

const Footer = ({ activeAdditionalFeatures }) => {

  // Links
  const googleTerms = 'https://cloud.google.com/maps-platform/terms/?_gl=1*1jv4sol*_ga*NTI2MDA1NzQuMTY3MjI1Njk4Nw..*_ga_NRWSTWS78N*MTY3NDI2MDczNi4zLjEuMTY3NDI2MDgwNi4wLjAuMA..'
  const googlePrivacyPolicy = 'https://policies.google.com/privacy'

  // Contact Info
  const joyOatWebsite = 'https://www.joyserquina.com'
  const joyGithub = 'https://www.github.com/essjay05'
  const joyLinkedIn = 'https://www.linkedin.com/in/joy-serquina'


  return (
    <footer className='main-footer'>
      <div className='contact-container'>
        <p className='copyright title-style-6'>&copy; Joy of All Trades LLC 2023</p>
        <ul>
          <li><span className='title-style-6'><a href={joyOatWebsite} name={`Joy's Portfolio Site`}>www.joyserquina.com</a></span></li>
          <li><span className='title-style-6'><a href={joyGithub} name={`Joy's Github`}>Github</a></span></li>
          <li><span className='title-style-6'><a href={joyLinkedIn} name={`Joy's LinkedIn`}>LinkedIn</a></span></li>
        </ul>
      </div>
      {
        activeAdditionalFeatures ?
          <div className='policies-container'>
            <ul>
              <li><span className='title-style-6 fine-print'><a href={googleTerms} name='Google Terms of Service'>Google Terms of Service</a></span></li>
              <li><span className='title-style-6 fine-print'><a href={googlePrivacyPolicy} name='Google Terms of Service'>Google Privacy Policy</a></span></li>
            </ul>
          </div>
        :
          ''
      }
      
    </footer>
  )
}

export default Footer