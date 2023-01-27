import styles from '../styles'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img src={logo} alt="hoobanck" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex flex-[1.5] flex-row w-full justify-between flex-wrap md:mt-0 mt-4'>
          {footerLinks.map(footerLink => (
            <div key={footerLink.title} className='flex flex-col ss:my-0 my-5 max-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] text-white leading-[27px]'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins text-normal text-[16px] text-dimWhite leading-[24px] hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 && "mb-4"}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-[18px] text-white leading-[27px]'>
        Copyrigth © 2021 HooBank. All Rights Reserved.
        </p> 
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img 
            key={social.id} 
            src={social.img} 
            alt={social.id} 
            className={`w-[21px] h-[21px] cursor-pointer object-contain ${index !== socialMedia.length -1 ? "mr-6" : "mr-0" }`}/>
          ))}
        </div>
      </div>
    </section>
)


export default Footer