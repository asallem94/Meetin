import StartNewGroup from "./shared/new_group_link";
import ShareOn from "./footer/share_on";
import LanguageSelector from "./footer/language_selector";
import FindUsOn from "./shared/"

const Footer = () => {
  const sectionContent={
    "Your Account": ["Sign-up", "Log-in", "Help"],
    "Discover": ["Groups", "Calendar", "topics", "cities"],
    "Meetin": ["About", "Meetin Pro", "Careers", "Apps", "API"],
    "Follow us": [ShareOn, LanguageSelector, FindUsOn]
  }
  const = parseSectionContent = sectionContent.keys.map((contentGroupName, idx)=>{
    return (
      <ul className=footer-content-containers>
        <h1 className="footer-content-title" key={idx}>{contentGroupName}</h1>
        {
          sectionContent[contentGroupName].map((contentComponent,idx)=>{
            <li className="footer-content-item">

            </li>
          });
        }
      </ul>
    )
  });
  return (
    <div className="footer-container">
      <div className="start-new-group-container-footer>
        {StartNewGroup}
      </div>
      <div className="footer-content">
        {parseSectionContent}
      </div>
    </div>
  );
};

export default Footer
