import { FaLinkedinIn, FaGithub, FaSlack } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoIosPhonePortrait } from "react-icons/io";
import "./SocialMediaLinks.css";

export const SocialMediaLinks = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={`https://www.linkedin.com/in/anna-robertsson-829967272/`}
        target="_blank"
        rel="noopener noreferrer"
        className={"linkedin-button"}
        aria-label={`LinkedIn Profile`}
      >
        <FaLinkedinIn aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href={`mailto:annarobertsson.webdeveloper@gmail.com`}
        target="_blank"
        rel="noopener noreferrer"
        className={"email-button"}
        aria-label={`E-mail`}
      >
        <TfiEmail aria-hidden="true" />
        <span className="sr-only">E-mail</span>
      </a>
      <div className="tooltip">
        <IoIosPhonePortrait className={"phone-button"} />
        <span className="tooltiptext">
          <span className="sr-only">Phone number:</span> +46(0)702 79 07 05
        </span>
      </div>
      <a
        href={`https://github.com/AnnaRobertsson`}
        target="_blank"
        rel="noopener noreferrer"
        className={"github-button"}
        aria-label={`GitHub Profile`}
      >
        <FaGithub aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href={`https://technigo.slack.com/team/U055LN8GBQA`}
        target="_blank"
        rel="noopener noreferrer"
        className={"slack-button"}
        aria-label={`Technigo Slack Team`}
      >
        <FaSlack aria-hidden="true" />
        <span className="sr-only">Slack</span>
      </a>
    </div>
  );
};
