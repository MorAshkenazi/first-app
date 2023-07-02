import { FunctionComponent } from "react";

interface FooterProps {
  devName: string;
  devYear: number;
}

const Footer: FunctionComponent<FooterProps> = ({ devName, devYear }) => {
  return (
    <div>
      <p>
        Website of {devName}, {devYear}
      </p>
      <div>
        <i className="fa-brands fa-github"></i>
      </div>
      {/* socials */}
    </div>
  );
};

export default Footer;
