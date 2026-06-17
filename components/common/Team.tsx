import Image from "next/image";
import Link from "next/link";
import DataLink from "@/components/common/DataLink";
import { teamMembers } from "@/data/team";

const Team = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div key={member.id} className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="team-card"
            data-aos="fade-up"
            data-aos-duration={900}
            data-aos-delay={member.aosDelay}
          >
            <div className="team-img">
              <Link href={member.profileHref} title="">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  width={306}
                  height={377}
                />
              </Link>
              <ul className="social-link3">
                {member.socialLinks.map((social) => (
                  <li key={social.id}>
                    <DataLink href={social.href} title="">
                      <Image
                        src={social.iconSrc}
                        alt={social.iconAlt}
                        width={20}
                        height={20}
                      />
                    </DataLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="team-content">
              {member.headingTag === "h3" ? (
                <h3 className="name">
                  <Link href={member.profileHref} title="">
                    {member.name}
                  </Link>
                </h3>
              ) : (
                <h4 className="name">
                  <Link href={member.profileHref} title="">
                    {member.name}
                  </Link>
                </h4>
              )}
              <span className="designation">{member.role}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
