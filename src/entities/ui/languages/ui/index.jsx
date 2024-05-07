"use client";
// consts
import { LANGUAGES } from "../consts";
// modules
import { Dropdown } from "flowbite-react";
import Link from "next/link";
// shared
import Lang from "@/shared/ui/lang/ui";
// hooks
import { useParams } from "next/navigation";
// styles
import classes from './style.module.scss';


const Languages = () => {
  const { lng } = useParams();
  const languages = Object.keys(LANGUAGES).filter((key) => key !== 'undefined' && key !== lng);

  const label = <><Lang/>{LANGUAGES[lng]}</>;
  return (
    <div className={classes.language}>
      <Dropdown
        label={label}
        className={classes.dropdown}
        inline
      >
        {
          languages.map((key) => (
            <Dropdown.Item key={key} className={classes.item}>
              <Link href={`/${key}/`} className={classes.link}>{LANGUAGES[key]}</Link>
            </Dropdown.Item>
          ))
        }
      </Dropdown>
    </div>
  );
};

export default Languages;