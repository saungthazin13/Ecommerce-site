import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { icons } from "@/components/icons";
import { Item } from "@radix-ui/react-navigation-menu";

const Footer = () => {
  return (
    <footer className="ml-4 w-full border-t lg:ml-0">
      <div className="container mx-auto pb-8 pt-6 lg:py-6">
        <section className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <section className="">
            <Link to="/" className="flex items-center space-x-2">
              <icons.Logo className="size-6" aria-hidden="true" />
              <span className="inline-block text-2xl font-bold">
                {siteConfig.name}
              </span>
              <span className="sr-only">Home</span> {/* For screen Reader */}
            </Link>
          </section>

          <section className="grid grid-cols-2 gap-16 md:grid-cols-5 lg:gap-20">
            {siteConfig.footerNav.map((footer) => (
              <div key={footer.title} className="space-y-3">
                <h4 className="font-bold">{footer.title}</h4>
                <ul className="">
                  {footer.items.map((item) => (
                    <li
                      key={footer.title}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {/* <Link to={item.href}>{item.title}</Link> */}
                      <Link to={(item as { href: string }).href}>
                        {item.title}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
