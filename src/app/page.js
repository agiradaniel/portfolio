import Image from 'next/image'
import styles from './page.module.css'
import WhatsappIcon from '../../public/whatsappicon.png'
import TwitterIcon from '../../public/twittericon.png'
import LinkedInIcon from '../../public/linkedin.png'
import Link from 'next/link'
import InstagramIcon from '../../public/instagramicon.png'
import { Button } from 'react-bootstrap'
import PortfolioImage from '../../public/portfolioimage-tiny.png'
import PortfolioImage2 from '../../public/portfolioimage.png'
import Decor1 from '../../public/decor1.png'
import Decor2 from '../../public/decor2.png'
import CrossPlatform from '../../public/crossplatform.png'
import WebIcon from '../../public/webicon.png'
import NextJsLogo from '../../public/nextjslogo.png'
import GoLangLogo from '../../public/golanglogo.png'
import ReactJsLogo from '../../public/reactjsicon.png'
import ExpoLogo from "../../public/expoicon.png"
import TypescriptLogo from '../../public/typescripticon.png'
import DjangoLogo from '../../public/djangologo.png'
import NodeJsLogo from '../../public/nodejslogo.png'
import ExpressJsLogo from '../../public/expresslogo.png'
import FirebaseLogo from '../../public/firebaselogo.png'
import SupabaseLogo from '../../public/supabaselogo.png'
import DockerLogo from '../../public/dockerlogo.png'
import FigmaLogo from '../../public/figmalogo.png'
import MySQLLogo from '../../public/mysqllogo.png'
import PostgreSQLLogo from '../../public/postgrelogo.png'
import MongoDBLogo from '../../public/mongodblogo.png'
import CSKBulkSms from '../../public/cskbulksms.png'
import ImmotechProject from '../../public/immotechdash.png'
import LotrhoProject from '../../public/lotrhoproject.png'
import EdmercProject from '../../public/edmercproject.png'
import AttachmentProject from '../../public/attachmentproject.png'
import ViewWebsiteIcon from '../../public/viewwebsiteicon.png'
import ItrustDashboard from '../../public/itrustdashboardcropped.png'


export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundColor: "#16152B", color: "white", fontFamily: "Montserrat" }}>

      <div className={styles.nav}>
        <Link href="#about" smooth className={styles.aboutnavlink}>About</Link>
        <Link href="#projects" smooth className={styles.projectsnavlink}>Projects</Link>
        <Link href="#contacts" smooth className={styles.contactsnavlink}>Contacts</Link>
      </div>

      <div className={styles.maindetails}>


        <div className={styles.maininfo}>
          <p className={styles.detail1}>Hello, I am</p>
          <h1 className={styles.detail2}>Daniel Karanja</h1>
          <p className={styles.detail3}>A full stack, cross platform software engineer</p>
          <p className={styles.detail4}>Find me on</p>
          <div className={styles.socialicons}>
            <a href="https://wa.me/254711754449" target="_blank" rel="noreferrer"><Image src={WhatsappIcon} className={styles.whatsappicon} alt="whatsappicon" /></a>
            <a href="https://twitter.com/dannyagira" target="_blank" rel="noreferrer"><Image src={TwitterIcon} className={styles.twittericon} alt="twitterpicon" /></a>
            <a href="https://www.linkedin.com/in/daniel-karanja-7350b1198" target="_blank" rel="noreferrer"><Image src={LinkedInIcon} className={styles.linkedinicon} alt="linkedinicon" /></a>
            <a href="https://instagram.com/agira.ke?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><Image src={InstagramIcon} className={styles.instagramicon} alt="instagramicon" /></a>
          </div>
          <a style={{ textDecoration: "none", color: "white" }} href="mailto:danielkaranja65@gmail.com"><Button className={styles.calltoactionbtn}>Get in Touch</Button></a>
        </div>

        <div>
          <Image src={PortfolioImage} className={styles.portfolioimage} alt="myimage" />

        </div>

        <Image src={Decor1} className={styles.decor1} alt="icon" />
        <Image src={Decor2} className={styles.decor2} alt="icon" />
      </div>

      <div className={styles.aboutsection} id="about">
        <Image src={CrossPlatform} className={styles.stackimage} alt="tech stack visual" />
        <div className={styles.abouttextcontainer}>
          <h4>A little about me</h4>
          <p>From iOS to Android, web, and desktop, I possess a diverse range of capabilities.
            I excel in crafting tailored solutions across these platforms, addressing your unique
            problems and enhancing your business.</p>
          <a style={{ textDecoration: "none", color: "black" }} href="https://agiraportfolio.vercel.app/portfoliocv.pdf" target="_blank" rel="noreferrer"><Button>Resume</Button></a>
        </div>

      </div>

      <div className={styles.websection}>
        <Image src={WebIcon} className={styles.webicon} alt="webicon" />
        <div className={styles.webinfo}>
          <p>Need a Website?, Look no Further</p>
          <p>I have a dedicated web development page.<br /> Click <a href="https://agiradaniel.github.io/agira-technologies/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#3D8840" }}>here</a> to learn more and start your online journey.</p>
        </div>
        <a style={{ textDecoration: "none", color: "white" }} href="https://agiradaniel.github.io/agira-technologies/" target="_blank" rel="noreferrer"><Button className={styles.getwebsitebtn}>Get a Website</Button></a>

      </div>

      <div className={styles.techstacksection}>
        <p className={styles.techparagraph}>Here are a few technologies I&apos;ve  been working with recently</p>

        <div className={styles.techstack}>
          <div>
            <div className={styles.innertechdiv}>
              <Image src={NextJsLogo} style={{ margin: "4px 10px 0 0" }} alt="nextjs logo" />
              <p>Next Js</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={ReactJsLogo} style={{ margin: "4px 10px 0 0" }} alt="reactjs logo" />
              <p>React Js</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={ReactJsLogo} style={{ margin: "4px 10px 0 0" }} alt="React logo" />
              <p>React Native</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={ExpoLogo} style={{ margin: "4px 10px 0 0" }} alt="Expo logo" />
              <p>Expo</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={TypescriptLogo} style={{ margin: "2px 10px 0 0" }} alt="Typescript logo" />
              <p>Typescript</p>
            </div>
          </div>

          <div>
            <div className={styles.innertechdiv}>
              <Image src={DjangoLogo} style={{ margin: "1px 3px 0 0", width: "30px", height: "30px", position: "relative", right: "3px" }} alt="Django logo" />
              <p>Django</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={NodeJsLogo} style={{ margin: "4px 10px 0 0" }} alt="nodejs logo" />
              <p>Node Js</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={ExpressJsLogo} style={{ margin: "4px 10px 0 0" }} alt="expressjs logo" />
              <p>Express Js</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={FirebaseLogo} style={{ margin: "4px 3px 0 0", position: "relative", right: "3px" }} alt="Firebase logo" />
              <p>Firebase</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={GoLangLogo} style={{ margin: "-2px 5px 0 -10px" }} alt="golang logo" />
              <p>Golang</p>
            </div>

          </div>

          <div>
            <div className={styles.innertechdiv}>
              <Image src={DockerLogo} style={{ margin: "4px 14px 0 0" }} alt="Docker logo" />
              <p>Docker</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={FigmaLogo} style={{ margin: "0 2px 0 0", position: "relative", right: "7px" }} alt="Figma logo" />
              <p>Figma</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={MySQLLogo} style={{ margin: "4px 16px 0 0" }} alt="MySQL logo" />
              <p>MySQL</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={PostgreSQLLogo} style={{ margin: "4px 16px 0 0" }} alt="PostgreSQL logo" />
              <p>PostgreSQL</p>
            </div>
            <div className={styles.innertechdiv}>
              <Image src={MongoDBLogo} style={{ margin: "2px 5px 0 0", position: "relative", right: "7px" }} alt="MongoDB logo" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>

      </div>

      <div style={{ backgroundColor: "#16152B" }} id="projects">
        <h4 style={{ textAlign: "center" }}>PROJECTS</h4>

        <div className={styles.projectcontaineralt}>

          <div className={styles.projecttextcontainer}>
            <h5>iTrustke</h5>
            <p>itrustke is a powerful platform designed for iPhone and gadget sellers to manage inventory, create professional
              invoices, and sell through a trusted online marketplace. It supports a wide range of devices including iPhones,
              Androids, laptops, and Macs. Sellers can easily track stock, post listings directly to the marketplace, and receive
              secure payments via Paystack, making itrustke a complete solution for inventory control, e-commerce, and streamlined
              payment collection.</p>
            <div className={styles.projectstack90}>
              <p>Golang</p>
              <p>React</p>
              <p>Typescript</p>
              <p>PostgreSQL</p>
              <p>HTMX</p>
              <a style={{ textDecoration: "none", color: "white" }} href="https://itrustgadgets.com/" target="_blank" rel="noreferrer"><Image src={ViewWebsiteIcon} style={{ margin: "10px 0 0 10px" }} alt="project image" /></a>
            </div>
          </div>
          <div className={styles.projectimagediv}><Image src={ItrustDashboard} style={{ borderRadius: "5px" }} className={styles.projectimage} alt="project image" /></div>
        </div>

        <div className={styles.projectcontainer}>

          <div className={styles.projectimagediv}><Image src={EdmercProject} style={{ borderRadius: "5px" }} className={styles.projectimage} alt="project image" /></div>

          <div className={styles.projecttextcontainer}>
            <h5>Edmerc Patient Management System</h5>
            <p style={{ lineHeight: "40px", fontSize: "18px" }}>Edmerc Patient Management System simplifies and streamlines hospital
              operations by automating patient data management. It efficiently maintains general patient records and
              appointment-specific details, ensuring a seamless flow of diagnosis and treatment information. Serving a
              diverse user base, including office administrators, doctors, dentists, and opticians, it enhances the continuity
              of patient care</p>
            <div className={styles.projectstack50}>
              <p>React</p>
              <p>Express</p>
              <p>MySQL</p>
            </div>
          </div>
        </div>

        <div className={styles.projectcontaineralt}>

          <div className={styles.projecttextcontainer}>
            <h5>Immotech Public Hotspot</h5>
            <p>Immotech Public Hotspot – a cutting-edge solution that revolutionizes
              public Wi-Fi access. Upon connecting to our public SSID, it presents users with a range of package options,
              generating vouchers corresponding to their selected plan. Behind the scenes, our backend orchestrates intricate
              processes, seamlessly integrating with M-Pesa for payments and the UniFi API to facilitate voucher
              issuance and network connectivity.</p>
            <div className={styles.projectstack90}>
              <p>React</p>
              <p>Java</p>
              <p>M-Pesa API</p>
              <p>Unifi API</p>
              <p>MySQL</p>
            </div>
          </div>
          <div className={styles.projectimagediv}><Image src={ImmotechProject} style={{ borderRadius: "5px" }} className={styles.projectimage} alt="project image" /></div>
        </div>

        <div className={styles.projectcontainer}>
          <div className={styles.projectimagediv}><Image src={LotrhoProject} style={{ borderRadius: "5px" }} className={styles.projectimage} alt="project image" /></div>
          <div className={styles.projecttextcontainer}>
            <h5>LOTRHO Counselling WebApp</h5>
            <p>Lotrho WebApp, powered by Next.js, offers a comprehensive platform for counseling
              services, catering to individuals, families, and groups. Users can easily schedule appointments and access a wide
              range of counseling services, making support and guidance readily available</p>
            <div className={styles.projectstack70}>
              <p>Next JS</p>
              <p>NodeMailer</p>
              <p>React Bootstrap</p>
              <a style={{ textDecoration: "none", color: "white" }} href="https://lotrhomcs.com" target="_blank" rel="noreferrer"><Image src={ViewWebsiteIcon} style={{ margin: "10px 0 0 10px" }} alt="project image" /></a>
            </div>
          </div>
        </div>

        <div className={styles.projectcontaineralt}>
          <div className={styles.projecttextcontainer}>
            <h5>Christiane School Bulk SMS Sytstem</h5>
            <p>A robust full-stack Bulk SMS System that seamlessly integrates with school management systems.
              This powerful system automates fee reminders, providing real-time updates on outstanding balances and
              student information. It also offers the flexibility to send announcements and customize messages for
              various groups. Powered by the Mobitech API, this system ensures efficient and effective communication.</p>
            <div className={styles.projectstack70}>
              <p>React</p>
              <p>Express</p>
              <p>MySQL</p>
              <p>Mobitech API</p>
            </div>
          </div>
          <div className={styles.projectimagediv}><Image src={CSKBulkSms} style={{ borderRadius: "5px" }} className={styles.projectimage} alt="project image" /></div>
        </div>

        <div className={styles.projectcontainer}>
          <div className={styles.projectimagediv}><Image src={AttachmentProject} style={{ borderRadius: "5px" }} className={styles.projectimage} alt="project image" /></div>
          <div className={styles.projecttextcontainer}>
            <h5>Attachment Management System</h5>
            <p style={{ lineHeight: "40px", fontSize: "18px" }}>The Attachment Management System is a revolutionary solution that transforms
              the student management process. It replaces traditional logbooks with e-logbooks, automates report submissions
              and assessment, streamlines student reviews, facilitates supervisor assignments, and allows progress tracking.
              This project encompasses numerous other features, optimizing the educational experience.</p>
            <div className={styles.projectstack70}>
              <p>React</p>
              <p>Express</p>
              <p>MySQL</p>
              <p>Firebase</p>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.contactarea} id="contacts">
        <h4 style={{ textAlign: "center" }}>Contact Me</h4>
        <h5>Lets bring you idea to life :)</h5>
        <p>I&apos;m ready for new opportunities, projects, and collaborations. My inbox is always open, and
          I welcome your outreach. Let&apos;s connect and create something exceptional together.</p>
        <div className={styles.contactcontainer}>
          <div className={styles.emailandnumber}>
            <a>danielkaranja65@gmail.com</a>
            <a style={{ marginTop: "15px" }}>+254-711754449</a>
          </div>
          <a style={{ textDecoration: "none", color: "white" }} href="mailto:danielkaranja65@gmail.com"><Button className={styles.contactbutton}>Get in Touch</Button></a>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Daniel Karanja</p>
        <p>Built with Next JS</p>
      </footer>


    </main>
  )
}
