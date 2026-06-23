import github from "../../public/github.svg";
import email from "../../public/mail.svg";
import linkedin from "../../public/linkedin.svg";

export default function Footer() {
  const links = [
    { img: github, url: "https://github.com/yuriteixeirac" },
    { img: linkedin, url: "https://linkedin.com/in/yuriteixeirac" },
    { img: email, url: "mailto:yuriteixeirac@proton.me" },
  ];

  return (
    <footer className="flex justify-center items-center bg-[var(--stormy-teal)] p-8">
      <div className="flex flex-col justify-center gap-4">
        <ul className="flex gap-8 justify-center">
          {links.map((link) => {
            return (
              <li>
                <a href={link.url}>
                  <img src={link.img} width={25} className="invert-100" />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-white">© Yuri Teixeira | Direitos Reservados</p>
      </div>
    </footer>
  );
}
